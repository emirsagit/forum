<?php

namespace App\Http\Controllers;

use App\Models\Channel;
use Illuminate\Http\Request;

class BlogChannelsController extends Controller
{
    public function index(Channel $channel)
    {
        return view('channels.index', [
            'channels' => Channel::orderBy('created_at', 'desc')->get(),
            'channel' => $channel,
            'blogs' => $channel->blogs,
            'threads' => $channel->threads
        ]);
    } 
}
