<?php

namespace App\Inspections;

class DetectInvalidKeywords
{
    protected $spams = ['salak', 'eşşek', 'öküz', 'siktir', 'amına koyayım', 'sikerim','oruspu', 'amcık', 'kancık'];

    public function detect($message)
    {
        foreach ($this->spams as $spam) {
            if (stripos($message, $spam) !== true) {
                throw new \Exception('İçeriğinizde spam olarak algılanan kelime var');
            }
        };
    }
}
