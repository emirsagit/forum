<?php

namespace App\Inspections;

class DetectKeydown
{
    public function detect($message)
    {
        if (preg_match('/(.)\\1{4,}/', $message)) {
            throw new \Exception('İçeriğinizde spam olarak algılanan kelime var');
        }
    }
}
