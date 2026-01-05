<template>
  <div class="w-full">
    <div class="relative">
      <!-- Vertical line (color can be overridden via `lineClass`) -->
      <div
        v-if="items && items.length > 1"
        :class="['absolute left-[19px] top-5 w-0.5', lineClass]"
        :style="{ height: lineHeight || 'auto' }"
      />

      <div
        v-if="items && items.length"
        class="space-y-8"
      >
        <div
          v-for="(item, idx) in items"
          :key="item.id ?? idx"
          :ref="idx === items.length - 1 ? 'lastItemRef' : null"
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
                class="w-[85%] h-[85%] object-cover object-center"
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
            <div class="flex flex-col xl:flex-row xl:justify-between xl:items-center">
              <h3
                class="text-lg font-semibold text-white"
                v-html="item.title"
              />
              <span class="text-sm text-gray-400">{{ item.date }}</span>
            </div>
            <p
              v-if="item.description"
              class="text-gray-400"
              v-html="item.description"
            />
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
  data() {
    return {
      lineHeight: "",
    };
  },
  watch: {
    items: {
      handler() {
        this.$nextTick(() => {
          this.updateLineHeight();
        });
      },
      deep: true,
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.updateLineHeight();
    });
    window.addEventListener("resize", this.updateLineHeight);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.updateLineHeight);
  },
  methods: {
    updateLineHeight() {
      try {
        if (!this.items || this.items.length <= 1) {
          this.lineHeight = "";
          return;
        }

        const lastItemRef = this.$refs.lastItemRef;
        if (!lastItemRef) {
          return;
        }

        const lastItem = Array.isArray(lastItemRef) ? lastItemRef[0] : lastItemRef;
        if (!lastItem) {
          return;
        }

        const lastMarker = lastItem.querySelector(".flex-shrink-0");
        const relativeContainer = this.$el.querySelector(".relative");

        if (!lastMarker || !relativeContainer) {
          return;
        }

        const markerRect = lastMarker.getBoundingClientRect();
        const containerRect = relativeContainer.getBoundingClientRect();
        const markerCenterFromTop =
          markerRect.top - containerRect.top + markerRect.height / 2;

        this.lineHeight = `${markerCenterFromTop}px`;
      } catch (error) {
        console.error("Error updating timeline line height:", error);
      }
    },
  },
};
</script>

<style scoped>
</style>
