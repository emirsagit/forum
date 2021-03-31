<div class="flex flex-row justify-between py-4 px-2 lg:p-2 lg:px-16 items-center">
    <div class="flex flex-row">
        @if($setting)
        <a href="/" class="mr-1">
            @if($setting->logo)
            <img src="/storage/{{ $setting->logo }}" alt="logo" width="328" height="122">
            @else
            <p class="font-bold text-xl p-2 -mt-1">{{ $setting->logo_title }}</p>
            @endif
        </a>
        @endif
    </div>

    <div class="flex flex-col lg:flex-row justify-between items-end lg:items-center lg:w-3/5">
        <search></search>
        <div class="flex flex-row items-center">
            @guest
            <signin-button class="text-xl">
            </signin-button>
            <register-button class="text-xl">
            </register-button>
            @else
            @if(strlen(($user = auth()->user())->avatar_path) != 1)
            <img src="{{ url($user->avatar_path) }}" alt="{{ $user->name }}"
                class="h-6 w-6 mr-2 hidden lg:flex rounded-full">
            @endif
            <navigation-auth-dropdown :user="{{ $user }}" class="flex text-xl">
            </navigation-auth-dropdown>
            <notification-dropdown></notification-dropdown>
            @endguest
        </div>
    </div>
</div>