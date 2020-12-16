<?php

namespace App\Http\Requests;

use App\Rules\Recaptcha;
use Illuminate\Foundation\Http\FormRequest;

class ContactFormRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules(Recaptcha $recaptcha)
    {
        return [
            "name" => "required|string",
            "email" => "required|email",
            "message" => "required|string|min:10",
            "g-recaptcha-response" => ['required', $recaptcha],
        ];
    }
}
