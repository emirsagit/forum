@component('profiles.partials.activity')
@slot('heading')
<a href="{{ $activity->subject->thread->path() }}" class="cursor-pointer mb-2 underline text-blue-600 hover:text-blue-800">
    <h3 class="text-l flex-1 text-blue-800">
        {{ $activity->subject->thread->title }} </a> konusuna yorum yaptı.</h3>
@endslot

@slot('body')

@endslot

@endcomponent
