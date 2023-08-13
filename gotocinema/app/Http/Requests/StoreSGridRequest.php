<?php

namespace App\Http\Requests;

use App\Models\HallConfig;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Request;

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
    protected function prepareForValidation()
    {
        $getingData = request()->all()['grid'];
        //$nameHall = HallConfig::find('1')['config'];
        //dd($nameHall);
        foreach($getingData as $el){
            //dd($el['Data']);
            $this->merge([
                'data'=>$el['Data'],
                'id_hall'=>$el['idHall'],
                'nameHall'=>HallConfig::find($el['idHall'])['name'],
                'ses_start'=>$el['sesStart'],
                'id_film'=>$el['idFilm'],
                'sold_seats'=>HallConfig::find($el['idHall'])['config']
            ]);  
        }
        
    }
}
