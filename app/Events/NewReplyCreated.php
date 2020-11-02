<?php

namespace App\Events;

use Illuminate\Queue\SerializesModels;

class NewReplyCreated
{
    use SerializesModels;

    public $reply;

    public function __construct($reply)
    {
        $this->reply = $reply;
    }
}
