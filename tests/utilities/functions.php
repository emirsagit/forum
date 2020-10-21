<?php

function create($class, $attributes = [])
{
    $class = "App\Models\\".$class;
    return $class::factory()->create($attributes);
} 

function make($class, $attributes = [])
{
    $class = "App\Models\\".$class;
    return $class::factory()->make($attributes);
} 
