@extends('layouts.app')

@section('content')
<div class="flex flex-col justify-center mt-4">
    <div class="bg-white sm:w-1/2 flex flex-col sm:m-auto p-4 text-gray-700">
        <div
            class="border border-gray-400 lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div class="mb-4">
                <h3 class="mx-auto text-lg text-red-600 mb-4 font-bold">Hoşgeldiniz 👋, Sayın {{ auth()->user()->username }}</h3>
                @if (session('resent'))
                <p class="text-sm text-red-600" role="alert">
                    {{ __('A fresh verification link has been sent to your email address.') }}
                </p>
                @endif
                <p class="text-gray-700 text-base mb-4">
                <p>
                    Son bir adım kaldı. Forumda mesaj göndermek, konu açmak, yanıtlamak için lütfen e-posta adresinizi onaylamanız gerekiyor.<br>
                    <span class="text-blue-500">E-posta adresinizi spam klasörü dahil kontrol etmenizi rica ediyoruz.</span> <br>
                    Maalesef bu adım bilgisayar olmadığınızı kanıtlamanız için gerekli. Forumu spam içerikten korumanın farklı bir yolunu bulamadık. <br>
                    Eğer e-posta ulaşmamışsa aşağıdaki linke tıklayarak tekrar gönderebilirsiniz.</p>
                <form class="d-inline" method="POST" action="{{ route('verification.resend') }}">
                    @csrf
                    <button type="submit"
                        class="button bg-blue-600 px-4 py-2 hover:bg-blue-800 rounded-lg text-white mt-4 text-sm">Gönder</button>
                </form>
            </div>
        </div>
    </div>

    <p></p>

</div>
</div>
</div>
</div>
</div>
@endsection