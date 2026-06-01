<script setup>
import { computed } from "vue";
import { currentPage } from "./content";

const { itemId, optionId, page, option } = currentPage();
const isCandidate = computed(() => optionId === "b");
</script>

<template>
  <main :class="['page-shell', option.variant]">
    <nav class="topbar" aria-label="Primary">
      <a class="brand" href="https://github.com/jerryfane/gitmoot-previews" target="_blank" rel="noreferrer">
        <span class="brand-mark">{{ page.product.slice(0, 2).toLowerCase() }}</span>
        <span>{{ page.product }}</span>
      </a>
      <a class="nav-link" href="https://github.com/jerryfane/gitmoot-previews/issues/1" target="_blank" rel="noreferrer">
        Review trial
      </a>
    </nav>

    <section class="hero" aria-labelledby="hero-title">
      <div class="hero-copy">
        <p class="eyebrow">{{ page.eyebrow }}</p>
        <h1 id="hero-title">{{ page.headline }}</h1>
        <p class="summary">{{ page.summary }}</p>
        <div class="actions" aria-label="Page actions">
          <a class="primary-action" href="https://github.com/jerryfane/gitmoot-previews/issues/1" target="_blank" rel="noreferrer">
            {{ page.primary }}
          </a>
          <a class="secondary-action" href="https://github.com/jerryfane/gitmoot-previews" target="_blank" rel="noreferrer">
            {{ page.secondary }}
          </a>
        </div>
      </div>

      <div class="visual-plane" aria-hidden="true">
        <div class="signal-board">
          <span v-for="step in page.steps" :key="step">{{ step }}</span>
        </div>
        <div class="axis-line" />
      </div>
    </section>

    <section class="proof-section">
      <p>{{ page.proof }}</p>
      <code>{{ page.command }}</code>
    </section>

    <section class="detail-section" aria-label="Workflow details">
      <div v-for="(detail, index) in page.details" :key="detail" class="detail-row">
        <span>{{ String(index + 1).padStart(2, "0") }}</span>
        <p>{{ detail }}</p>
      </div>
    </section>

    <section v-if="isCandidate" class="candidate-rhythm" aria-label="Candidate emphasis">
      <p>Sharper hierarchy, calmer motion, and a stronger close for faster human judgment.</p>
    </section>

    <footer>
      <span>{{ itemId }} / {{ option.label }}</span>
      <span>{{ option.notes }}</span>
    </footer>
  </main>
</template>
