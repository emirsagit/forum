<?php

namespace Tests\Unit;

use App\Inspections\Spam;
use Tests\TestCase;

class SpamTest extends TestCase
{
    public function test_it_validates_spam()
    {
        $spam = new Spam;

        $this->assertFalse($spam->detect('it is spam'));
    } 

    public function test_when_keydown_message_send_validates_spam()
    {
        $spam = new Spam;

        $this->expectException(\Exception::class);

        $this->assertTrue($spam->detect('sasfsaf11111111111111111'));
    } 

    public function test_when_spam_message_send_throw_exception()
    {
        $spam = new Spam;

        $this->expectException(\Exception::class);

        $this->assertTrue($spam->detect('bu bir spam'));
    } 
}
