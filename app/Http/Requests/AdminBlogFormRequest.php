<?php

namespace App\Http\Requests;

use Illuminate\Support\Str;
use App\Rules\EditorJsValidationRules;
use Illuminate\Foundation\Http\FormRequest;

class AdminBlogFormRequest extends FormRequest
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
            'slug' => 'unique:blogs',
            'channel_id' => ['required', 'exists:channels,id'],
            'image' => 'required|image|max:1999',
            'body' => ['required', new EditorJsValidationRules],
        ];
    }

    protected function prepareForValidation()
    {
        $this->merge([
            'slug' => Str::slug($this->title),
        ]);
        $this->merge(['body'=> json_decode($this->body, true)]);
    }
}
