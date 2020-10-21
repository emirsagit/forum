<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\User;
use App\Models\Thread;
use App\Models\Channel;
use Illuminate\Auth\AuthenticationException;

class CreateThreadsTest extends TestCase
{
    public function test_guest_user_may_not_create_thread()
    {
        $this->expectException(AuthenticationException::class);

        $this->withoutExceptionHandling();
        
        $thread = Thread::factory()->make();

        $this->post('/threads', $thread->toArray());
    }

    public function test_auth_user_can_create_thread()
    {   
        $this->actingAs(User::factory()->create());

        $thread = Thread::factory()->make();

        $this->post('/threads', $thread->toArray());

        $this->get('threads')
            ->assertSee($thread->title);
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
