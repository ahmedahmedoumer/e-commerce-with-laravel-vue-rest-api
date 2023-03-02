<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class adminloginRequest extends FormRequest
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
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'email'=>'required|email',
            'password'=>'required',
        ];
    }
    public function messages()
    {
        return [
            'email.required'=>'the email field is required',
            'email.email'   => 'the email field have to email',
            'password.required'=>'the password field is required',

        ];
    }
}
