@extends('layouts.app')

@section('content')
<div class="flex w-full h-24 bg-blue-600 text-white">
    <div class="flex m-auto content-center items-baseline">
        <h1 class="text-xl mr-2">{{ $user->name }}</h1><span
            class="text-teal-200 text-sm">{{ $user->created_at->diffForHumans() }} üye oldu</span>
    </div>
</div>
<div class="flex flex-row mt-2 flex-wrap-reverse lg:m-auto lg:mt-8">
    <div class="flex flex-col px-4 lg:w-3/4 m-auto">
        @foreach ($activities as $date => $data)
        <div class="flex flex-col shadow-lg">
            <div class="flex flex-col items-center">
                <h2 class="text-xl text-teal-700 mt-4">{{ $date }}</h2>
            </div>
            @foreach ($data as $activity)
            <div class="flex mt-2 p-2 flex-col">
                @include("profiles.partials.{$activity->type}")
            </div>
            @endforeach
        </div>
        @endforeach
        @endsection