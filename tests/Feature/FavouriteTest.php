<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\User;
use App\Models\Reply;


class FavouriteTest extends TestCase
{
    public function test_a_auth_user_favourite_a_reply()
    {
        $this->be(User::factory()->create());
        //need reply
        $reply = Reply::factory()->create();
        //post a reply
        $this->post('/threads/' . $reply->id . '/favourites');
        $this->assertCount(1 ,$reply->favourites);
        //insert database
    } 

    public function guest_can_not_favourite_anything()
    {
        $this->expectException(AuthenticationException::class);

        $this->withoutExceptionHandling();
        
        $reply = Reply::factory()->create();
        //post a reply
        $this->post('/threads/' . $reply->id . '/favourites');
    } 

    public function test_it_a_user_can_favorite_a_reply_only_once()
    {
        $this->withoutExceptionHandling();
        
        $this->be(User::factory()->create());

        $reply = Reply::factory()->create();

        $this->post('/threads/' . $reply->id . '/favourites');
        $this->post('/threads/' . $reply->id . '/favourites');
        
        $this->assertCount(1 ,$reply->favourites);
    } 

    public function test_it_auth_user_can_unfavourite_reply()
    {
        $this->withoutExceptionHandling();
        
        $this->be(User::factory()->create());

        $reply = Reply::factory()->create();

        $this->post('/threads/' . $reply->id . '/favourites');
        $this->delete('/threads/' . $reply->id . '/favourites');
        
        $this->assertCount(0 ,$reply->favourites);
    } 
}
