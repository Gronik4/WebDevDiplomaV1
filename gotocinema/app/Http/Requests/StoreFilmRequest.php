<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreFilmRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'name'=>['required', 'string', 'max:255'],
            'desc'=>['required', 'string'],
            'genre'=>['required', 'string', 'max:255'],
            'creators'=>['required', 'string', 'max:255'],
            'realise'=>['required', 'string', 'max:255'],
            'duration'=>['required', 'string', 'max:255'],
            'image'=>['required', 'mimes:jpg,jpeg,png,gif,svg,xbm,xpm,wbmp,webp,bmp', 'max:2048']
        ];
    }
}
