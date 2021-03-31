@extends('layouts.app')

@section('head')
<script src="https://www.google.com/recaptcha/api.js" async defer></script>
@section('content')

<section class="pb-12 flex flex-col bg-gray-900">
    <div class="container mx-auto px-4 lg:pt-8 pt-4">
        <div class="flex flex-wrap text-center justify-center">
            <div class="w-full lg:w-6/12 px-4 pb-8">
                <h2 class="text-4xl font-semibold text-white">İletişim</h2>
                <p class="text-lg leading-relaxed mt-4 text-gray-500">
                    Forum kullanımı, sorunları, hakaret ya da herhangi bir olumsuzluk içerdiğini düşündüğünüz gönderilerle ilgili lütfen aşağıdaki iletişim formunu kullanarak bizimle ya da <a href="/profiles/emirsagit" class="underline text-gray-400 hover:text-gray-600">@emirsagit</a> isimli kullanıcıyla irtibata geçin. Herhangi bir teknik sorununuz, sorularınız varsa bize bildirebilirsiniz. İnceleyip en kısa sürede yanıtlayacağız. Geri bildirimleriniz ve yorumlarınız bizim için çok önemlidir ve her zaman olumlu karşılanacaktır. Teşekkürler... 
                </p>
            </div>
        </div>
        {{-- <div class="flex flex-wrap mt-4 justify-center mb-8 lg:mb-4">
            @foreach ($admins as $admin)
            <div class="w-full lg:w-3/12 px-4 text-center mb-4 lg:mb-0">
                <div class="bg-white inline-flex items-center justify-center rounded-full">
                    @if(strlen($admin->avatar_path) != 1)
                    <img class="inline-block h-16 w-16 rounded-full text-white shadow-solid"
                        src="{{ $admin->avatar_path }}" alt="{{ $admin->name }}" />
                    @else
                    <div class="w-16 h-16 flex flex-col items-center justify-center">
                        <p class="text-blue-700 font-bold text-xl">
                            {{ strtoupper($admin->avatar_path) }}
                        </p>
                    </div>
                    @endif
                </div>
                <h6 class="text-xl mt-2 font-semibold text-white">
                    {{ $admin->username }}
                </h6>
            </div>
            @endforeach
        </div> --}}
    </div>
    <div class="relative block">
        <div class="container mx-auto px-4 lg:pt-8">
            <div class="flex flex-wrap justify-center">
                <div class="w-full lg:w-6/12 px-4">
                    <div
                        class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300">
                        <div class="flex-auto p-5">
                            <h4 class="text-2xl font-semibold">İletişim Formu</h4>
                            <p class="leading-relaxed mt-1 mb-4 text-gray-600">
                                Formu kullanarak bizimle iletişime geçebilirsiniz.
                            </p>
                            <form method="POST" action="{{ route('contact.store') }}">
                                @csrf
                                <div class="relative w-full mb-3 mt-8">
                                    <label class="block uppercase text-gray-700 text-xs font-bold mb-2"
                                        for="name">İsminiz</label>
                                    <input type="text"
                                        class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full @error('name') border-2 border-red-500 @enderror"
                                        placeholder="İsminiz" name="name" />
                                    @error('name')
                                    <div class="text-red-600">{{ $message }}</div>
                                    @enderror
                                </div>

                                <div class="relative w-full mb-3">
                                    <label class="block uppercase text-gray-700 text-xs font-bold mb-2" for="email">Mail
                                        Adresiniz</label><input type="email"
                                        class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full @error('name') border-2 border-red-500 @enderror"
                                        placeholder="Email" name="email" />
                                    @error('email')
                                    <div class="text-red-600">{{ $message }}</div>
                                    @enderror
                                </div>

                                <div class="relative w-full mb-3">
                                    <label class="block uppercase text-gray-700 text-xs font-bold mb-2"
                                        for="message">Mesajınız</label><textarea rows="4" cols="80"
                                        class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full @error('name') border-2 border-red-500 @enderror"
                                        placeholder="Mesajınız..." name="message"></textarea>
                                    @error('message')
                                    <div class="text-red-600">{{ $message }}</div>
                                    @enderror
                                </div>

                                <div class="g-recaptcha" data-sitekey="{{ config('services.recaptcha.key') }}"></div>
                                @error('g-recaptcha-response')
                                <div class="text-red-600">{{ $message }}</div>
                                @enderror

                                <div class="text-center mt-6">
                                    <button
                                        class="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                                        type="submit">
                                        Gönder
                                    </button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</section>



@endsection