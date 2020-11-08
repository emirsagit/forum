<?php

namespace Tests\Feature;


use Tests\TestCase;
use App\Models\User;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;


class AddAvatarTest extends TestCase
{
    public function test_only_members_can_add_avatar()
    {
        $this->json('POST', '/api/profiles/1/avatar', [
            'avatar' => 'avatar.jpg'
        ])
            ->assertStatus(401);
    }

    public function test_avatar_must_be_image_format()
    {
        $this->be(User::factory()->create());

        $this->json('POST', '/api/profiles/1/avatar', [
            'avatar' => 'avatar.exe'
        ])
        ->assertStatus(422);
    }

    public function test_auth_user_can_add_avatar()
    {
        $this->be($user = User::factory()->create());

        Storage::fake('public');

        $this->json('POST', "/api/profiles/" . auth()->user()->id . "/avatar", [
            'avatar' => $file = UploadedFile::fake()->image('avatar.jpg')
        ]);

        $this->assertEquals('/storage/avatars/' . $file->hashName(), $user->avatar_path);
        Storage::disk('public')->assertExists('avatars/' . $file->hashName());
    }
}
