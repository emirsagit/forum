<?php

namespace App\Inspections;

class Spam
{
    protected $detectors = [
        DetectInvalidKeywords::class,
        DetectKeydown::class
    ];

    public function detect($message)
    {
        foreach ($this->detectors as $detector) {
             app($detector)->detect($message);
        }

        return false;
    }
}
