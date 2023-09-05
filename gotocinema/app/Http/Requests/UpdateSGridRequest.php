<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateSGridRequest extends FormRequest
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
    {//dd(var_dump($this->query));
        return [
            'grids'=> ['sometimes', 'required', 'array', 'min:1'],
            'grids.*.data'=>['sometimes', 'required', 'string', 'max:50'],
            'grids.*.id_hall'=>['sometimes', 'required', 'integer'],
            'grids.*.ses_start'=>['sometimes', 'required', 'string', 'max:50'],
            'grids.*.id_film'=>['sometimes', 'required', 'integer'],
            'allpwed'=>['sometimes', 'required', 'boolean'],
        ];
    }
}
