<?php

namespace App\Http\Requests;

use Illuminate\Support\Str;
use App\Rules\EditorJsValidationRules;
use Illuminate\Foundation\Http\FormRequest;

class LevelsFormRequest extends FormRequest
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
            'name' => 'string|unique:levels,name',
            'slug' => 'string|unique:levels,slug',
            'image' => 'nullable|image|max:1999',
            'body' => ['nullable', new EditorJsValidationRules],
        ];
    }

    protected function prepareForValidation()
    {
        $this->merge([
            'slug' => Str::slug($this->name),
        ]);
        $this->merge(['body'=> json_decode($this->body, true)]);
    }
}
