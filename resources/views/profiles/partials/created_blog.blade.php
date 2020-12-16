@component('profiles.partials.activity')
@slot('heading')
<div class="flex flex-1 flex-row">
    {{-- <a href="{{ $activity->subject->path() }}" class="cursor-pointer mb-2 underline text-blue-600 hover:text-blue-800"> --}}
        <h3 class="text-l flex-1 text-blue-800">
            {{ $activity->subject->title }}</a> konusunu oluşturdu.</h3>
    {{-- </a> --}}
</div>
@endslot

@slot('body')
<p class="text-sm text-gray-700">{!! $activity->subject->body !!}</p>
@endslot

@endcomponent