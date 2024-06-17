<template>
  <div
    class="rounded-lg border border-surface-200 dark:border-surface-700 bg-surface-0 dark:bg-surface-800 shadow-lg mb-4 p-8"
  >
    <Skeleton width="100%" height="150px"></Skeleton>
    <div class="flex mt-4 w-full">
      <div class="w-full">
        <Skeleton width="10rem" class="mb-2"></Skeleton>
        <Skeleton width="100%" class="mb-2"></Skeleton>
        <Skeleton height=".5rem"></Skeleton>
      </div>
    </div>
  </div>
</template>
