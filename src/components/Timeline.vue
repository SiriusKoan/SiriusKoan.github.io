<template>
  <div class="w-full">
    <div class="relative">
      <!-- Vertical line (color can be overridden via `lineClass`) -->
      <div :class="['absolute left-[19px] top-5 bottom-0 w-0.5', lineClass]" />

      <div
        v-if="items && items.length"
        class="space-y-8"
      >
        <div
          v-for="(item, idx) in items"
          :key="item.id ?? idx"
          class="relative flex items-start"
        >
          <div
            :class="[
              'flex-shrink-0',
              markerSizeClass,
              item.image ? (item.imageBgClass || 'bg-white') : (item.colorClass || defaultMarkerColor),
              'rounded-full flex items-center justify-center overflow-hidden text-white'
            ]"
          >
            <template v-if="item.image">
              <img
                :src="item.image"
                :alt="item.title"
                class="w-full h-full object-cover object-center"
              >
            </template>
            <FontAwesomeIcon
              v-else-if="item.icon"
              :icon="item.icon"
              class="w-4 h-4"
              aria-hidden="true"
            />
            <span
              v-else
              class="text-sm"
            >{{ item.initials || '' }}</span>
          </div>

          <div class="ml-4 bg-gray-800 p-4 rounded-lg shadow-md flex-1">
            <div class="flex flex-col xl:flex-row xl:justify-between xl:items-center mb-1">
              <h3 class="text-lg font-semibold text-white">
                {{ item.title }}
              </h3>
              <span class="text-sm text-gray-400">{{ item.date }}</span>
            </div>
            <p
              v-if="item.description"
              class="text-gray-400"
            >
              {{ item.description }}
            </p>
            <div
              v-if="item.meta"
              class="mt-2 text-sm text-gray-400"
            >
              {{ item.meta }}
            </div>
          </div>
        </div>
      </div>

      <div
        v-else
        class="text-gray-400 italic"
      >
        No timeline items
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "Timeline",
  components: { FontAwesomeIcon },
  props: {
    /**
     * items: array of objects describing each timeline item:
     * {
     *   id?: string | number,
     *   title: string,
     *   date?: string,
     *   description?: string,
     *   meta?: string,
     *   image?: string, // URL to an image for the marker (e.g., school or organization logo)
     *   imageBgClass?: string, // tailwind bg color applied to the marker when an image is used (defaults to white)
     *   icon?: string | Array, // passed to FontAwesomeIcon (e.g. 'fas fa-graduation-cap' or ['fas', 'graduation-cap'])
     *   colorClass?: string, // tailwind bg color for marker, e.g. 'bg-indigo-600'
     *   initials?: string // fallback text if no icon or image
     * }
     */
    items: {
      type: Array,
      required: true,
    },
    // tailwind class for the vertical line color
    lineClass: {
      type: String,
      default: "bg-white",
    },
    // class for marker sizing
    markerSizeClass: {
      type: String,
      default: "w-10 h-10",
    },
    // default marker color (tailwind)
    defaultMarkerColor: {
      type: String,
      default: "bg-white",
    },
  },
};
</script>

<style scoped>
</style>
