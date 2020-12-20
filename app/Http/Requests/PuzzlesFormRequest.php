<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PuzzlesFormRequest extends FormRequest
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
    public function rules()
    {
        return [
            'question' => ['required', 'string'],
            'answer' => ['required','string'],
        ];
    }

    protected function prepareForValidation()
    {
        $levels = [];
        foreach ($this->levels as $level) {
            $levels[] = $level['id'];
        }
        $this->merge(['levels' => $levels]);
    }
}
