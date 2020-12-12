<?php

namespace App\Http\Controllers\Admin;

use App\Models\Channel;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use App\Http\Requests\StoreChannel;
use App\Http\Controllers\Controller;

class AdminChannelsController extends Controller
{
    public function index()
    {
        return view('admin.channels.index', [
            'channels' => Channel::latest()->get()
        ]);
    }

    public function update(Channel $channel, Request $request)
    {
        $request->validate([
            'name' => ['required','string', Rule::unique('channels')->ignore($channel->id)],
            'color' => 'string',
            'channel_title' => 'string',
            'channel_description' => 'string',
        ]);

        $channel->update([
            'name' => $request->name,
            'color' => $request->color,
            'channel_title' => $request->channel_title,
            'channel_description' => $request->channel_description,
        ]);

        return $channel->toJson();
    }

    public function destroy(Channel $channel)
    {
        $channel->delete();
    }

    public function store(StoreChannel $request)
    {
        return Channel::create([
            'name' => $request->name,
            'slug' => $request->slug,
            'color' => $request->color,
            'channel_title' => $request->channel_title,
            'channel_description' => $request->channel_description,
        ]);
    }
}
