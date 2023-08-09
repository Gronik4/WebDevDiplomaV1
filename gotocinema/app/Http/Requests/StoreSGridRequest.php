<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreSGridRequest extends FormRequest
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
            'data'=>['required', 'string', 'max:50'],
            'id_hall'=>['required', 'integer'],
            'nameHall'=>['required', 'string', 'max:255'],
            'ses_start'=>['required', 'string', 'max:50'],
            'id_film'=>['required', 'integer'],
            'sold_seats'=>['required', 'json']
        ];
    }
}
