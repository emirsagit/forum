<?php

namespace App\Http\Requests;

use App\Rules\EditorJsValidationRules;
use Illuminate\Foundation\Http\FormRequest;

class AdminBlogUpdateFormRequest extends FormRequest
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
            'title' => ['required', 'string'],
            'body' => ['required', new EditorJsValidationRules],
            'channel_id' => ['required', 'exists:channels,id'],
            'image' => 'nullable|image|max:1999',
        ];
    }

    protected function prepareForValidation()
    {
        $this->merge(['body' => json_decode($this->body, true)]);
    }
}
