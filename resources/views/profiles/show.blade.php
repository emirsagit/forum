@extends('layouts.app')

@section('content')

<profile data="{{ $user->avatar_path }}" inline-template>
    <div>
        <div class="flex w-full h-24 bg-blue-600 text-white">
            <div class="flex m-auto items-end">
                <div class="flex overflow-hidden mr-2">
                    <img class="inline-block h-10 w-10 rounded-full text-white shadow-solid"
                        :src="avatar" alt="{{ $user->name }}" />
                </div>
                <h1 class="text-xl mr-2">{{ $user->name }}</h1>
                <p class="text-teal-200 text-xs mb-1">{{ $user->created_at->diffForHumans() }} üye oldu</p>
            </div>
        </div>
        <div class="flex flex-row mt-2 flex-wrap-reverse lg:m-auto lg:mt-8">
            <div class="flex flex-col px-4 lg:w-3/4 m-auto">
                <profile-form :user="{{ $user }}" @updated="updated"></profile-form>
                @forelse ($activities as $date => $data)
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
                @empty
                <div class="flex flex-col shadow-lg">
                    <div class="flex flex-col items-center">
                        <h2 class="text-xl text-teal-700 mt-4">Henüz kullanıcıya ait aktivite bulunmamaktadır.</h2>
                    </div>
                </div>
                @endforelse
            </div>
        </div>
    </div>
</profile>
@endsection