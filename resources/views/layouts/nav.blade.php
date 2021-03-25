<nav class="bg-white text-lg font-semibold flex flex-col tracking-wide">
    @include('nav.topnav')
    <div class="flex flex-row my-auto justify-center items-center flex-wrap py-4 lg:p-2 lg:px-16 border-t-2 border-b-2 border-teal-900 font-extrabold">
        <div class="block lg:hidden">
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
        <div class="w-full text-teal-700 flex flex-col items-center relative" :class="{hidden : !expand && windowWidth < 1024}">
            <nav-link class="lg:flex-row text-xl bg-white"></nav-link>
        </div>
    </div>
</nav>