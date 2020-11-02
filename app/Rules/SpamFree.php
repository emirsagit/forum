<?php

namespace App\Rules;

use App\Inspections\Spam;
use Illuminate\Contracts\Validation\Rule;

class SpamFree implements Rule
{

    public function passes($attribute, $value)
    {
        try {
            return !resolve(Spam::class)->detect($value);
        } catch (\Exception $te) {
            return false;
        }
    }


    public function message()
    {
        return 'Spam olarak algılanan içerik bulunuyor';
    }
}
