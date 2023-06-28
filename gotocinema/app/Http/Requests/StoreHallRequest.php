<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreHallRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'name'=>['required', 'unique:halls_configs,name', 'string', 'max:255'], // Проверка на отсутствие дублирующихся данных
            'config'=>['exclude_unless: name, null', 'required', 'json'], // Поле будет проверятся, если name = null
            'price_vip'=>['exclude_unless: name, null', 'required', 'integer'], // Поле будет проверятся, если = null 
            'price_ordinary'=>['exclude_unless: name, null', 'required', 'integer'] // Поле будет проверятся, если = null
        ];
    }
}
