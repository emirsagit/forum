<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\User;
use App\Models\Thread;
use App\Models\Channel;
use App\Rules\Recaptcha;
use Illuminate\Auth\AuthenticationException;

class CreateThreadsTest extends TestCase
{
    public function test_guest_user_may_not_create_thread()
    {
        $this->expectException(AuthenticationException::class);

        $this->withoutExceptionHandling();
        
        $this->post('/threads', [
            'title' => 'some title some',
            'body' => 'some body some',
            'channel_id' => Channel::factory()->create()->id,
            'recaptcha' => 'token'
        ]);
    }

    public function test_authenticated_user_can_create_thread()
    {   
        $this->mock(Recaptcha::class, function ($mock) {
            $mock->shouldReceive('passes')->once()->andReturn(true);
        });

        $this->actingAs(User::factory()->create());

        $this->post('/threads', [
            'title' => 'some title some',
            'body' => 'some body some',
            'channel_id' => Channel::factory()->create()->id,
            'recaptcha' => 'token'
        ]);

        $this->get('threads')
            ->assertSee('some title');
    }

    public function test_unique_slug_is_required()
    {
        $this->mock(Recaptcha::class, function ($mock) {
            $mock->shouldReceive('passes')->andReturn(true);
        });

        $this->actingAs(User::factory()->create());

        $this->post('/threads', [
            'title' => 'this-title',
            'body' => 'some body some',
            'channel_id' => Channel::factory()->create()->id,
            'recaptcha' => 'token'
        ]);

        $this->assertDatabaseHas('threads', ['slug' => 'this-title']);

        $this->post('/threads', [
            'title' => 'this-title',
            'body' => 'some body some',
            'channel_id' => Channel::factory()->create()->id,
            'recaptcha' => 'token'
        ]);

        $query = Thread::get()->count();

        $this->assertDatabaseHas('threads', ['slug' => 'this-title-' . $query]);
    }


    public function test_guest_can_not_see_the_create_page()
    {
        $this->get('/threads/create')
            ->assertRedirect('/login');
    }

    public function test_threads_title_attribute_is_required()
    {
        $this->threadRequiredValidation('title');
    } 

    public function test_threads_body_attribute_is_required()
    {
        $this->threadRequiredValidation('body');
    } 

    public function test_recaptcha_is_required()
    {
        $this->threadRequiredValidation('recaptcha');
    } 

    public function test_threads_channel_id_attribute_is_required()
    {
        $this->threadRequiredValidation('channel_id');
    } 

    public function test_threads_channel_id_is_exists_in_channels_table()
    {
        Channel::factory(2)->create();

        $this->actingAs(User::factory()->create());

        $thread = Thread::factory()->make(['channel_id' => 100]);

        return $this->post('/threads', $thread->toArray())
            ->assertSessionHasErrors('channel_id');
    } 

    protected function threadRequiredValidation($attribute)
    {
        $this->actingAs(User::factory()->create());

        $thread = Thread::factory()->make([$attribute => null]);

        return $this->post('/threads', $thread->toArray())->assertSessionHasErrors($attribute);
    } 
}
