@extends('layouts.app')
@section('head')
<title>
    @if($setting) {{ $setting->puzzle_title }}
    @endif
</title>
<meta name="description" content="
   @if ($setting) {{ $setting->puzzle_description }} 
   @endif">
@endsection
@section('content')
<div class="pb-24 min-h-screen">
    <div class="flex w-full h-24 bg-gradient-to-r from-teal-500 to-blue-500 text-white">
        <div class="flex m-auto">
            <h1 class="text-2xl">Bilmece Sayfamıza Hoşgeldiniz</h1>
        </div>
    </div>
    <div class="lg:px-48 p-4 flex flex-col">
        <div class="flex flex-col justify-center mb-8">
            <h3 class="text-xl text-teal-800 text-center">Sizin için birbirinden eğlenceli bilmeceler hazırladık...</h3>
            <p class="text-lg text-center pt-4 text-gray-700">
                Bilmeceler birlikte vakit geçirmenin zorlaştığı, sosyal medyanın yaygın kullanımıyla birlikte aile içi
                ilişkilerin ve iletişimin azaldığı bu günlerde ailenizle keyifli vakit geçirmeniz için iyi bir araç
                olabilir. Bu amaçla yediden yetmişe her yaşa hitap eden bilmeceleri derledik. Zorluklarına göre gruplara
                ayırdık. Aşağıdan grup seçerek bilmeceleri görüntüyelebilirsiniz. Keyifli okumalar...
            </p>
        </div>
        <div class="flex flex-row flex-wrap w-full justify-between lg:justify-center">
            @forelse($levels as $level)
            <div class="lg:w-1/4 w-1/2 py-4 px-2 lg:pr-4">
                <a href="{{ route('puzzles.show', ['level' => $level->slug]) }}">
                    <h4
                        class="text-2xl w-full p-2 text-indigo-800 text-center cursor-pointer hover:text-indigo-900 bg-gray-200 rounded-lg">
                        {{ $level->name }}
                    </h4>
                </a>
            </div>
            @empty
            <p class="text-lg lg:px-16 text-center pt-4 text-gray-700">
                Üzgünüz şu an bilmece bulamadık... Lütfen daha sonra tekrar deneyiniz...
            </p>
            @endforelse
        </div>
    </div>
</div>
@endsection