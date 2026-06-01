<script setup>
import { computed } from "vue";
import { currentPage } from "./content";

const { itemId, optionId, page, option, direction } = currentPage();
const isWorkflow = computed(() => option.variant === "workflow");
</script>

<template>
  <main :class="['page-shell', option.variant]">
    <nav class="topbar" aria-label="Primary">
      <a class="brand" href="https://github.com/jerryfane/gitmoot-previews" target="_blank" rel="noreferrer">
        <span class="brand-mark">{{ page.product.slice(0, 2).toLowerCase() }}</span>
        <span>{{ page.product }}</span>
      </a>
      <a class="nav-link" href="https://github.com/jerryfane/gitmoot-previews/issues/1" target="_blank" rel="noreferrer">
        {{ isWorkflow ? "Run workflow" : "Read story" }}
      </a>
    </nav>

    <section class="hero" aria-labelledby="hero-title">
      <div class="hero-copy">
        <p class="eyebrow">{{ direction.eyebrow }}</p>
        <h1 id="hero-title">{{ direction.headline }}</h1>
        <p class="summary">{{ direction.summary }}</p>
        <div class="actions" aria-label="Page actions">
          <a class="primary-action" href="https://github.com/jerryfane/gitmoot-previews/issues/1" target="_blank" rel="noreferrer">
            {{ direction.primary }}
          </a>
          <a class="secondary-action" href="https://github.com/jerryfane/gitmoot-previews" target="_blank" rel="noreferrer">
            {{ direction.secondary }}
          </a>
        </div>
      </div>

      <div class="visual-plane" aria-hidden="true">
        <div v-if="isWorkflow" class="workflow-stack">
          <span v-for="(step, index) in direction.steps" :key="step">
            <b>{{ String(index + 1).padStart(2, "0") }}</b>
            {{ step }}
          </span>
        </div>
        <div v-else class="story-mark">
          <span>{{ page.product }}</span>
          <i v-for="step in direction.steps" :key="step">{{ step }}</i>
        </div>
      </div>
    </section>

    <section class="proof-section">
      <p>{{ direction.proof }}</p>
      <code>{{ direction.command }}</code>
    </section>

    <section class="detail-section" aria-label="Workflow details">
      <div v-for="(detail, index) in direction.details" :key="detail" class="detail-row">
        <span>{{ String(index + 1).padStart(2, "0") }}</span>
        <p>{{ detail }}</p>
      </div>
    </section>

    <section class="closing-section" aria-label="Closing point">
      <p v-if="isWorkflow">Best for reviewers who want concrete tasks, commands, and proof that the product can be used immediately.</p>
      <p v-else>Best for reviewers who want a memorable product story, a polished first impression, and buyer-level clarity.</p>
    </section>

    <footer>
      <span>{{ itemId }} / {{ option.label }}</span>
      <span>{{ option.notes }}</span>
    </footer>
  </main>
</template>
