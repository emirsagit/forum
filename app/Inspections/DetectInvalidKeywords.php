<?php

namespace App\Inspections;

class DetectInvalidKeywords
{
    protected $spams = ['bu bir spam'];

    public function detect($message)
    {
        foreach ($this->spams as $spam) {
            if (stripos($message, $spam) !== false) {
                throw new \Exception('İçeriğinizde spam olarak algılanan kelime var');
            }
        };
    }
}
