@extends('layouts.app')

@section('content')
<div class="flex w-full h-24 bg-gradient-to-r from-teal-700 to-teal-500 text-white">
    <div class="flex m-auto">
        <h1 class="text-l">Türkiye Forumlarına hoşgeldiniz</h1>
    </div>
</div>
<threads :data="{{ $threads->toJson() }}" :trendings="{{ $trendings }}"></threads>
<div class="flex flex-row lg:w-4/5 lg:m-auto mb-4">
    <div class="lg:w-1/4">

    </div>
    <div class="lg:w-3/4 m-auto mb-8">
        {{ $threads->withQueryString()->links() }}
    </div>
</div>


@endsection