<nav class="lg:w-5/6 m-auto flex items-center justify-between flex-wrap p-6">
    <div class="flex items-center flex-shrink-0 mr-6">
        forum
    </div>
    <div class="block lg:hidden order-first">
        <button
            class="flex items-center px-3 py-2 border rounded border-teal-400 hover:text-teal-800 hover:border-teal-600 text-teal-600"
            @click="expand = !expand">
            <svg class="fill-current h-3 w-3" stroke="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
        </button>
    </div>
    <div class="w-full block flex-grow text-teal-600 lg:flex lg:items-center lg:w-auto"
        :class="expand ? 'flex flex-col' : 'hidden'">
        <div class="text-sm lg:flex-grow">
            <a href="{{ route('threads.index') }}" class="block mt-4 lg:inline-block lg:mt-0 mr-4 hover:text-teal-800 ">
                Forum
            </a>
            <a href="{{ route('threads.create') }}"
                class="block mt-4 lg:inline-block lg:mt-0 mr-4 hover:text-teal-800 ">
                Yeni Konu
            </a>
            <a href="#responsive-header" class="block mt-4 mr-4 lg:inline-block lg:mt-0 hover:text-teal-800 ">
                Etiketler
            </a>
            <!-- component -->
            <div class="block mt-4 lg:inline-block lg:mt-0 hover:text-teal-800 text-sm">
                <div class="flex flex-row">
                    <input type="search" class="bg-purple-white shadow rounded border-0 p-1 pl-2" placeholder="Ara..."
                        v-model="search">
                    <svg version="1.1" class="h-4 text-dark mt-2 -ml-4 cursor-pointer hover:text-teal-600"
                        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                        viewBox="0 0 52.966 52.966" style="enable-background:new 0 0 52.966 52.966;"
                        xml:space="preserve" @click="searchRequest">
                        <path d="M51.704,51.273L36.845,35.82c3.79-3.801,6.138-9.041,6.138-14.82c0-11.58-9.42-21-21-21s-21,9.42-21,21s9.42,21,21,21
          c5.083,0,9.748-1.817,13.384-4.832l14.895,15.491c0.196,0.205,0.458,0.307,0.721,0.307c0.25,0,0.499-0.093,0.693-0.279
          C52.074,52.304,52.086,51.671,51.704,51.273z M21.983,40c-10.477,0-19-8.523-19-19s8.523-19,19-19s19,8.523,19,19
          S32.459,40,21.983,40z" />
                    </svg>
                </div>
            </div>
        </div>
        <div class="flex flex-col lg:flex-row">
            @guest
            <signin-button>
            </signin-button>
            <register-button>
            </register-button>
            @else
            <navigation-auth-dropdown :user="{{ auth()->user() }}" class="hidden lg:flex">
            </navigation-auth-dropdown>
            <navigation-auth :user="{{ auth()->user() }}" class="lg:hidden">
            </navigation-auth>
            <notification-dropdown></notification-dropdown>
            @endguest
        </div>
    </div>
</nav>