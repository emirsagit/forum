<?php

namespace App\Http\Controllers;

use App\Models\Channel;
use Illuminate\Http\Request;

class BlogChannelsController extends Controller
{
    public function show(Channel $channel)
    {
        return view('channels.index', [
            'channel' => $channel,
            'blogs' => $channel->blogs,
            'threads' => $channel->threads
        ]);
    } 
}
