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
            'grid'=>['require', 'array'],
            'grid.*.data'=>['required', 'string', 'max:50'],
            'grid.*.id_hall'=>['required', 'integer'],
            'grid.*.ses_start'=>['required', 'string', 'max:50'],
            'grid.*.id_film'=>['required', 'integer'],
        ];     
    }
    
}
