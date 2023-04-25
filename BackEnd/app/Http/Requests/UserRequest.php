<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UserRequest extends FormRequest
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
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'email' => 'required|email|max:50|unique:App\Models\User,email',
            'password' => 'required|min:8|max:25|regex:/^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#])(?=.*[0-9])(?=[^\s])/',
            'name' => 'required|max:50',
            'phone_number' => 'required|numeric|min:9|unique:App\Models\User,phone_number',
            'user_roles' => [
                'required',
                Rule::in(['user', 'ts'])
            ],
            'about' => 'nullable|max:2048'
        ];
    }

    /**
     * Get the error messages for the defined validation rules.
     *
     * @return array<string, string>
     */
    public function messages(): array
    {
        return [
            'password.regex' => 'This password is invalid! Make sure your password has at least
                                 1 upper case character, 1 lower case character, 1 special character,
                                 1 number and zero space!',
        ];
    }
}
