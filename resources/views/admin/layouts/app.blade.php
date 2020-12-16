@extends('layouts.app')

@section('content')
<admin inline-template>
    <div class="flex flex-col min-h-screen">
        <div class="flex w-full h-24 bg-indigo-700 text-white">
            <div class="flex m-auto">
                <h1 class="text-l">Yönetim Paneline Hoşgeldiniz</h1>
            </div>
        </div>
        <div class="flex lg:flex-row w-full h-full bg-indigo-900">
            <div class="w-1/3 lg:w-1/5 bg-indigo-700 text-white text-sm lg:text-lg" :class="hide ? 'hidden' : 'flex'"
                id="sidebar">
                <admin-sidebar></admin-sidebar>
            </div>
            <div class=" bg-white h-full" :class="hide ? 'w-full' : 'w-2/3 lg:w-4/5'">
                <p class="cursor-pointer mb-2 flex flex-col items-start mr-1" @click="hide = false" v-if="hide">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        class="w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </p>
                <div class="pb-24">
                    @yield('body')
                </div>
            </div>
        </div>
    </div>
</admin>
@endsection