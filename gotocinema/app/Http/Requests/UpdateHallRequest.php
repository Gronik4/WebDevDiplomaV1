<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateHallRequest extends FormRequest
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
            'config'=>['sometimes', 'required', 'json'],
            'price_vip'=>['sometimes', 'required', 'integer'],
            'price_ordinary'=>['sometimes', 'required', 'integer'] 
        ];
    }
}
