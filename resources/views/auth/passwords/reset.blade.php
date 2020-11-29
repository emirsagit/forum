@extends('layouts.app')

@section('content')

<div class="grid min-h-screen place-items-center">
    <div class="w-11/12 p-3 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12">
        <h1 class="text-lg font-semibold">Merhabalar 👋, <span class="font-normal">Formu doldurarak şifrenizi yenileyebilirsiniz.</span></h1>
        <form method="POST" action="{{ route('password.update') }}" class="mt-6">
            @csrf
            <input type="hidden" name="token" value="{{ $token }}">
            <label for="email" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">E-posta</label>
            <input id="email" type="email" name="email" placeholder="isim@mail.com" autocomplete="email"
                class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner @error('email') border-red-500 @enderror" value="{{ $email ?? old('email') }}"
                required />
                @error('email')
                <span class="text-red-600" role="alert">
                    <strong>{{ $message }}</strong>
                </span>
                @enderror
            <label for="password" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Şifre</label>
            <input id="password" type="password" name="password" placeholder="********" autocomplete="new-password"
                class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner @error('password') border-red-500 @enderror"
                required />
                @error('password')
                <span class="text-red-600" role="alert">
                    <strong>{{ $message }}</strong>
                </span>
                @enderror
            <label for="password-confirm" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Şifre Onayı</label>
            <input id="password-confirmation" type="password" name="password_confirmation" placeholder="********"
                autocomplete="new-password"
                class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                required />
            <button type="submit"
                class="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-indigo-600 shadow-lg focus:outline-none hover:bg-indigo-500 hover:shadow-none">
                Kaydet
            </button>
        </form>
    </div>
</div>
@endsection