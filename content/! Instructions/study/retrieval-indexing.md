# RAG & Its Evolutions + Code & Doc Indexing — Reference Repo Research

Research completed: 2026-05-24
Agent cluster: Retrieval & Indexing
Concepts covered: RAG & Its Evolutions, Code & Doc Indexing

---

## RAG & Its Evolutions

### Graph RAG (knowledge-graph-enhanced retrieval)

**Repo:** `HKUDS/LightRAG`
**URL:** https://github.com/HKUDS/LightRAG
**Created/Updated:** 2026-05-24 (active, merged RAG-Anything in May 2026)
**Stars:** ~35,000
**Licence:** MIT
**What it solves:** Simple, fast graph-based RAG that builds knowledge graphs from documents to enable connected, contextual retrieval with dual-level retrieval (low-level entity and high-level topic) — significantly outperforming Microsoft GraphRAG on accuracy while being far cheaper to run.
**Why it qualifies:** EMNLP 2025 paper, massive adoption (35k stars), actively maintained with new chunking strategies and multimodal support added in May 2026; the leading alternative to Microsoft GraphRAG.
**Proposed tensaicompl name:** `tensai-graph-rag-light`
**Links to concept page:** craft/rag-evolutions

---

### Graph RAG (modular, enterprise-grade)

**Repo:** `microsoft/graphrag`
**URL:** https://github.com/microsoft/graphrag
**Created/Updated:** 2026-04-13 (latest release)
**Stars:** ~33,000
**Licence:** MIT
**What it solves:** Modular graph-based RAG system that uses LLMs to build knowledge graphs from unstructured text, enabling community-level summarisation and multi-hop reasoning over large document collections.
**Why it qualifies:** The original Graph RAG from Microsoft Research; 33k stars, actively maintained with ongoing releases removing NetworkX dependency and moving to DataFrame-based implementations.
**Proposed tensaicompl name:** `tensai-graph-rag-microsoft`
**Links to concept page:** craft/rag-evolutions

---

### Graph RAG SDK (graph database native)

**Repo:** `FalkorDB/GraphRAG-SDK`
**URL:** https://github.com/FalkorDB/GraphRAG-SDK
**Created/Updated:** 2026-04 (v1.0 released)
**Stars:** ~500
**Licence:** MIT
**What it solves:** SDK for building GraphRAG applications on top of FalkorDB (GraphBLAS-powered graph database), providing schema-driven knowledge graph construction with ontology-guided entity/relation extraction.
**Why it qualifies:** V1.0 released April 2026 with new benchmarks from a year of research and customer PoCs; purpose-built for production GraphRAG on a fast graph database rather than generic vector stores.
**Proposed tensaicompl name:** `tensai-graphdb-rag-sdk`
**Links to concept page:** craft/rag-evolutions

---

### Multimodal RAG (all document types)

**Repo:** `HKUDS/RAG-Anything`
**URL:** https://github.com/HKUDS/RAG-Anything
**Created/Updated:** 2026-05 (merged into LightRAG, standalone still active)
**Stars:** ~21,000
**Licence:** MIT
**What it solves:** All-in-one multimodal document processing RAG that handles text, images, tables, equations, charts, and multimedia content — building multimodal knowledge graphs with hybrid intelligent retrieval across content types.
**Why it qualifies:** 21k stars, built on LightRAG; addresses the real-world problem that documents are multimodal, not just text; actively maintained with MinerU/Docling integration.
**Proposed tensaicompl name:** `tensai-multimodal-rag`
**Links to concept page:** craft/rag-evolutions

---

### Agentic RAG (hierarchical retrieval interfaces)

**Repo:** `Ayanami0730/arag`
**URL:** https://github.com/Ayanami0730/arag
**Created/Updated:** 2026 (active)
**Stars:** ~200
**Licence:** MIT
**What it solves:** Agentic RAG framework with three hierarchical retrieval tools (keyword_search, semantic_search, chunk_read) that let the agent autonomously choose retrieval strategies, iterate on results, and interleave tool use in a ReAct loop — achieving superior accuracy with fewer retrieved tokens.
**Why it qualifies:** Clean implementation of the agentic RAG pattern with principled design (autonomous strategy, iterative execution, interleaved tool use); good reference for understanding how agents should drive retrieval rather than passively receive chunks.
**Proposed tensaicompl name:** `tensai-agentic-rag`
**Links to concept page:** craft/rag-evolutions

---

### Self-correcting / Corrective RAG (CRAG)

**Repo:** `HuskyInSalt/CRAG`
**URL:** https://github.com/HuskyInSalt/CRAG
**Created/Updated:** 2024-2026 (reference implementation of CRAG paper)
**Stars:** ~300
**Licence:** MIT
**What it solves:** Reference implementation of the Corrective Retrieval Augmented Generation paper — a lightweight retrieval evaluator assesses document relevance, triggers web search fallback for low-confidence retrievals, and applies knowledge refinement to strip noise from retrieved documents before generation.
**Why it qualifies:** Official code release for the seminal CRAG paper; the canonical reference for understanding self-correcting retrieval patterns; directly cloneable and reproducible.
**Proposed tensaicompl name:** `tensai-corrective-rag`
**Links to concept page:** craft/rag-evolutions

---

### Hybrid search (dense + sparse retrieval fusion)

**Repo:** `alibaba/zvec`
**URL:** https://github.com/alibaba/zvec
**Created/Updated:** 2026-05-24 (v0.4.0, active)
**Stars:** ~9,300
**Licence:** Apache-2.0
**What it solves:** Lightweight, in-process vector database built on Alibaba's Proxima engine that supports both dense and sparse vectors natively with multi-vector queries in a single call — enabling hybrid search without external infrastructure.
**Why it qualifies:** 9.3k stars, backed by Alibaba's production-tested Proxima engine; embeddable (no server process), supports Flutter/mobile via FFI; solves the "I need hybrid search without running a separate vector DB" problem.
**Proposed tensaicompl name:** `tensai-embedded-hybrid-vectordb`
**Links to concept page:** craft/rag-evolutions

---

### Chunking strategies (adaptive, per-document optimisation)

**Repo:** `ekimetrics/adaptive-chunking`
**URL:** https://github.com/ekimetrics/adaptive-chunking
**Created/Updated:** 2026 (accepted at LREC 2026)
**Stars:** ~100
**Licence:** MIT
**What it solves:** Evaluates multiple chunking strategies against intrinsic quality metrics (size compliance, intrachunk cohesion, contextual coherence, block integrity) and automatically selects the best chunking method per document — because no single strategy works best for all documents.
**Why it qualifies:** Peer-reviewed (LREC 2026), official implementation of the paper; solves a real pain point (which chunking strategy should I use?) with a principled, metric-driven answer instead of guesswork.
**Proposed tensaicompl name:** `tensai-adaptive-chunking`
**Links to concept page:** craft/rag-evolutions

---

### Chunking library (production-grade, multi-strategy)

**Repo:** `chonkie-inc/chonkie`
**URL:** https://github.com/chonkie-inc/chonkie
**Created/Updated:** 2026-01-31 (active, self-hosted API available)
**Stars:** ~3,700
**Licence:** MIT
**What it solves:** Lightweight chunking library with 32+ integrations supporting token, sentence, semantic, recursive, and code-aware (AST) chunking strategies — designed to be the single dependency for RAG ingestion pipelines.
**Why it qualifies:** 3.7k stars, focused solely on chunking (not a mega-framework); supports 32+ tokeniser/embedding/vector DB integrations; can run as a self-hosted FastAPI server; actively maintained.
**Proposed tensaicompl name:** `tensai-chunking-library`
**Links to concept page:** craft/rag-evolutions

---

### Chunking benchmark (find the best strategy for your corpus)

**Repo:** `shantanu-deshmukh/chunktuner`
**URL:** https://github.com/shantanu-deshmukh/chunktuner
**Created/Updated:** 2026 (active, CLI + MCP server)
**Stars:** ~100
**Licence:** MIT
**What it solves:** Benchmarks chunking strategies (fixed-token, recursive, semantic, PDF structural, AST code chunking) against real retrieval metrics (token recall, MRR, NDCG) and optional generation metrics (RAGAS faithfulness, answer relevancy) — then recommends the optimal config for your specific corpus.
**Why it qualifies:** Purpose-built for the "which chunking should I use?" decision; provides Python library, CLI tool, and MCP server; produces actionable recommendations rather than just comparisons.
**Proposed tensaicompl name:** `tensai-chunk-benchmark`
**Links to concept page:** craft/rag-evolutions

---

### Rerankers (unified API for all reranking models)

**Repo:** `AnswerDotAI/rerankers`
**URL:** https://github.com/AnswerDotAI/rerankers
**Created/Updated:** 2026 (v0.10.0, active)
**Stars:** ~1,600
**Licence:** Apache-2.0
**What it solves:** Lightweight, unified API for cross-encoder, ColBERT, late-interaction, and API-based reranking models — swap between FlashRank, MXBai, Cohere, Jina, and PyLate rerankers with a single interface change.
**Why it qualifies:** 1.6k stars, from Answer.AI (Jeremy Howard's org); solves the fragmentation problem of each reranker having its own API; actively maintained with MXBai V2 (current open-source SOTA reranker) support.
**Proposed tensaicompl name:** `tensai-reranker-unified`
**Links to concept page:** craft/rag-evolutions

---

### Embedding + reranker fine-tuning (end-to-end RAG retrieval training)

**Repo:** `NovaSearch-Team/RAG-Retrieval`
**URL:** https://github.com/NovaSearch-Team/RAG-Retrieval
**Created/Updated:** 2026 (active)
**Stars:** ~1,000
**Licence:** MIT
**What it solves:** Unified framework for fine-tuning RAG retrieval models including embedding models, ColBERT late-interaction models, and cross-encoder rerankers — with distillation from stronger to weaker models and compatibility with most open-source models (BGE, BCE, GTE).
**Why it qualifies:** Covers the full retrieval training pipeline (embedding + ColBERT + reranker) in one repo; supports knowledge distillation; works with all major open-source embedding/reranking model families.
**Proposed tensaicompl name:** `tensai-retrieval-finetuning`
**Links to concept page:** craft/rag-evolutions

---

### Embedding models (multilingual, multi-functionality)

**Repo:** `FlagOpen/FlagEmbedding`
**URL:** https://github.com/FlagOpen/FlagEmbedding
**Created/Updated:** 2026 (active, BGE-M3 and multilingual Gemma2)
**Stars:** ~11,100
**Licence:** MIT
**What it solves:** BGE family of embedding models with multi-linguality (100+ languages), multi-granularities (up to 8192 tokens), and multi-functionality (dense + lexical + ColBERT retrieval in one model) — plus research implementations for visual BGE and long-context embeddings.
**Why it qualifies:** 11k stars, BAAI-backed; BGE-M3 is the de facto standard for multilingual hybrid retrieval; actively maintained with new model releases; includes training code and evaluation scripts.
**Proposed tensaicompl name:** `tensai-bge-embeddings`
**Links to concept page:** craft/rag-evolutions

---

### Embedding pipeline (Rust-native, multimodal ingestion)

**Repo:** `StarlightSearch/EmbedAnything`
**URL:** https://github.com/StarlightSearch/EmbedAnything
**Created/Updated:** 2026 (active, Qwen3 model support)
**Stars:** ~1,200
**Licence:** Apache-2.0
**What it solves:** Rust-native embedding pipeline that handles text, images, audio, PDFs, and websites — generating embeddings from multiple sources and streaming them directly to vector databases (Weaviate, Qdrant, Pinecone) with minimal memory footprint.
**Why it qualifies:** Built in Rust for performance and memory safety; supports multimodal inputs including Qwen3 models; focused on the ingestion/embedding step rather than being a full RAG framework; production-ready with adapter pattern for multiple vector DBs.
**Proposed tensaicompl name:** `tensai-rust-embedding-pipeline`
**Links to concept page:** craft/rag-evolutions

---

### Multimodal embedding + reranking (vision-language retrieval)

**Repo:** `QwenLM/Qwen3-VL-Embedding`
**URL:** https://github.com/QwenLM/Qwen3-VL-Embedding
**Created/Updated:** 2026-05 (newly released)
**Stars:** ~500
**Licence:** Apache-2.0
**What it solves:** State-of-the-art multimodal embedding and reranking models that accept text, images, screenshots, videos, and mixed-modal inputs — with separate embedding models for initial recall and reranking models for precision refinement.
**Why it qualifies:** From the Qwen team (Alibaba Cloud); SOTA on multimodal retrieval benchmarks; the 8B reranker variant outperforms all baselines across most tasks; includes RAG tutorial notebooks and vLLM inference examples.
**Proposed tensaicompl name:** `tensai-multimodal-embeddings`
**Links to concept page:** craft/rag-evolutions

---

### RAG evaluation framework

**Repo:** `explodinggradients/ragas`
**URL:** https://github.com/explodinggradients/ragas
**Created/Updated:** 2026-01-13 (v0.4.3, active)
**Stars:** ~12,900
**Licence:** Apache-2.0
**What it solves:** Reference-free evaluation of RAG pipelines with metrics for faithfulness, answer relevancy, context precision, and context recall — plus synthetic test data generation for systematic RAG benchmarking without manual annotation.
**Why it qualifies:** 12.9k stars, the de facto standard for RAG evaluation; reference-free metrics mean you can evaluate without ground-truth answers; integrates with LangChain, LlamaIndex, and Haystack; actively maintained.
**Proposed tensaicompl name:** `tensai-rag-evaluation`
**Links to concept page:** craft/rag-evolutions

---

### GraphRAG evaluation benchmark

**Repo:** `GraphRAG-Bench/GraphRAG-Benchmark`
**URL:** https://github.com/GraphRAG-Bench/GraphRAG-Benchmark
**Created/Updated:** 2026 (ICLR 2026 paper)
**Stars:** ~380
**Licence:** MIT
**What it solves:** Comprehensive benchmark for evaluating when and how to use graphs in RAG — with domain-specific leaderboards and multi-level tasks covering fact retrieval, complex reasoning, contextual summarisation, and creative generation.
**Why it qualifies:** Accepted at ICLR 2026 ("When to use Graphs in RAG"); the first systematic benchmark that helps practitioners decide whether GraphRAG actually helps their use case versus simpler approaches.
**Proposed tensaicompl name:** `tensai-graphrag-benchmark`
**Links to concept page:** craft/rag-evolutions

---

### Multi-turn RAG evaluation

**Repo:** `IBM/mt-rag-benchmark`
**URL:** https://github.com/IBM/mt-rag-benchmark
**Created/Updated:** 2026 (SemEval 2026 shared task)
**Stars:** ~130
**Licence:** Apache-2.0
**What it solves:** The first end-to-end human-generated multi-turn RAG benchmark that reflects real-world conversation properties — with four document corpora and evaluation for both retrieval quality and generation quality across conversation turns.
**Why it qualifies:** From IBM Research, accepted as SemEval 2026 shared task (MTRAGEval); addresses a blind spot in RAG evaluation (most benchmarks are single-turn); human-generated, not synthetic.
**Proposed tensaicompl name:** `tensai-multiturn-rag-eval`
**Links to concept page:** craft/rag-evolutions

---

### Document parsing for RAG (vision-based layout analysis + OCR)

**Repo:** `lumina-ai-inc/chunkr`
**URL:** https://github.com/lumina-ai-inc/chunkr
**Created/Updated:** 2026 (active)
**Stars:** ~2,900
**Licence:** AGPL-3.0 (commercial licence available)
**What it solves:** Production-ready service for document layout analysis, OCR, and semantic chunking that converts PDFs, PPTs, Word docs, and images into RAG/LLM-ready chunks with structured HTML and Markdown output.
**Why it qualifies:** 2.9k stars; solves the document-to-chunks pipeline that every RAG system needs but few handle well; includes vision-language model processing; self-hostable via Docker.
**Proposed tensaicompl name:** `tensai-document-parser-rag`
**Links to concept page:** craft/rag-evolutions

---

### Late chunking (context-preserving chunk embeddings)

**Repo:** `jina-ai/late-chunking`
**URL:** https://github.com/jina-ai/late-chunking
**Created/Updated:** 2024-12-23 (reference implementation, stable)
**Stars:** ~490
**Licence:** Apache-2.0
**What it solves:** Applies the transformer model to the entire text first, then pools segments into chunk embeddings — so each chunk's embedding incorporates the full document context, solving the "chunks lose context" problem in traditional chunking.
**Why it qualifies:** From Jina AI; the canonical reference implementation of the late chunking technique; includes evaluation against traditional chunking on BeIR datasets; directly addresses a fundamental limitation of standard RAG pipelines.
**Proposed tensaicompl name:** `tensai-late-chunking`
**Links to concept page:** craft/rag-evolutions

---

### RAG techniques compendium (educational, 30+ techniques)

**Repo:** `NirDiamant/RAG_Techniques`
**URL:** https://github.com/NirDiamant/RAG_Techniques
**Created/Updated:** 2026 (active, continuously updated)
**Stars:** ~26,200
**Licence:** Custom non-commercial
**What it solves:** Curated collection of 30+ advanced RAG techniques as interactive Jupyter notebooks — covering query expansion, HyDE, contextual retrieval, fusion retrieval, CRAG, self-RAG, agentic RAG, graph RAG, and more, each with working code.
**Why it qualifies:** 26k stars; the single best educational resource for understanding the full landscape of RAG techniques; each technique is a standalone notebook with clear explanations and runnable code.
**Proposed tensaicompl name:** `tensai-rag-techniques-compendium`
**Links to concept page:** craft/rag-evolutions

---

## Code & Doc Indexing

### Code knowledge graph (browser-based, zero-server)

**Repo:** `abhigyanpatwari/GitNexus`
**URL:** https://github.com/abhigyanpatwari/GitNexus
**Created/Updated:** 2026 (active, ~40k stars)
**Stars:** ~39,800
**Licence:** PolyForm Noncommercial 1.0.0 (free for non-commercial use)
**What it solves:** Client-side knowledge graph creator that runs entirely in the browser — drop in a GitHub repo or ZIP file to get an interactive knowledge graph with a built-in Graph RAG Agent for code exploration, dependency analysis, and codebase Q&A with zero server infrastructure.
**Why it qualifies:** 40k stars, exploded in popularity; solves codebase understanding with zero setup; Graph RAG Agent provides conversational code exploration; all processing happens client-side.
**Proposed tensaicompl name:** `tensai-browser-code-graph`
**Links to concept page:** craft/code-doc-indexing

---

### Codebase knowledge graph for AI reviews (tree-sitter + MCP)

**Repo:** `tirth8205/code-review-graph`
**URL:** https://github.com/tirth8205/code-review-graph
**Created/Updated:** 2026 (created 2026, MIT)
**Stars:** ~17,200
**Licence:** MIT
**What it solves:** Builds a persistent structural map of codebases using tree-sitter and provides AI assistants with precise context via MCP — achieving 6.8x fewer tokens on code reviews and up to 49x fewer tokens on daily coding tasks.
**Why it qualifies:** 17k stars, created in 2026; directly addresses the "AI reads too many files" problem with measured token savings; uses tree-sitter for structural parsing and MCP for AI integration.
**Proposed tensaicompl name:** `tensai-code-review-graph`
**Links to concept page:** craft/code-doc-indexing

---

### Incremental data indexing engine (real-time, change-aware)

**Repo:** `cocoindex-io/cocoindex`
**URL:** https://github.com/cocoindex-io/cocoindex
**Created/Updated:** 2026-05-18 (active)
**Stars:** ~6,900
**Licence:** Apache-2.0
**What it solves:** Incremental indexing engine that turns codebases, documents, Slack, PDFs, and other sources into continuously fresh context for AI agents — with minimal reprocessing by tracking what changed and only updating affected indexes.
**Why it qualifies:** 6.9k stars, Apache-2.0; Rust-based core for performance; solves the "stale index" problem that plagues static RAG setups; includes code embedding example with tree-sitter support; actively maintained.
**Proposed tensaicompl name:** `tensai-incremental-indexer`
**Links to concept page:** craft/code-doc-indexing

---

### Graph-based code context (MCP server + CLI)

**Repo:** `CodeGraphContext/CodeGraphContext`
**URL:** https://github.com/CodeGraphContext/CodeGraphContext
**Created/Updated:** 2026-05-20 (active)
**Stars:** ~3,400
**Licence:** MIT
**What it solves:** Indexes local code into a graph database and exposes it as an MCP server — giving AI assistants structured code context including dependencies, call graphs, and symbol relationships instead of raw file contents.
**Why it qualifies:** 3.4k stars, 587 forks; works as both standalone CLI and MCP server; graph-based approach provides richer context than flat file search; actively maintained.
**Proposed tensaicompl name:** `tensai-code-graph-context`
**Links to concept page:** craft/code-doc-indexing

---

### High-performance code intelligence (knowledge graph, 155 languages)

**Repo:** `DeusData/codebase-memory-mcp`
**URL:** https://github.com/DeusData/codebase-memory-mcp
**Created/Updated:** 2026-05 (v0.6.0, active)
**Stars:** ~2,500
**Licence:** MIT
**What it solves:** Indexes codebases into a persistent knowledge graph with tree-sitter AST analysis across 155 languages, LSP-style type resolution, vector-based semantic search, and near-clone detection — all as a single static binary with zero dependencies.
**Why it qualifies:** 2.5k stars; evaluated across 31 real-world repos showing 83% answer quality, 10x fewer tokens, and 2.1x fewer tool calls versus file-by-file exploration; single binary deployment; research-backed with preprint.
**Proposed tensaicompl name:** `tensai-codebase-knowledge-graph`
**Links to concept page:** craft/code-doc-indexing

---

### AST-based code search engine (lightweight CLI)

**Repo:** `cocoindex-io/cocoindex-code`
**URL:** https://github.com/cocoindex-io/cocoindex-code
**Created/Updated:** 2026-05-16 (v0.2.33, active)
**Stars:** ~1,700
**Licence:** Apache-2.0
**What it solves:** Lightweight AST-based code search engine CLI that indexes codebases with tree-sitter and provides semantic code search — saving 70% of tokens and improving speed for AI coding agents with zero configuration.
**Why it qualifies:** 1.7k stars; 1-minute setup, zero config; works as CLI, Claude Code skill, or MCP server; built on CocoIndex's Rust-based engine for performance; actively maintained with frequent releases.
**Proposed tensaicompl name:** `tensai-ast-code-search`
**Links to concept page:** craft/code-doc-indexing

---

### Semantic code search (ripgrep + tree-sitter, Rust)

**Repo:** `probelabs/probe`
**URL:** https://github.com/probelabs/probe
**Created/Updated:** 2026 (active)
**Stars:** ~1,000
**Licence:** Apache-2.0
**What it solves:** AI-friendly semantic code search that combines ripgrep speed with tree-sitter AST parsing — returns complete functions/classes/structs (not mid-function text chunks), supports Elasticsearch-style queries, requires zero indexing and no vector databases.
**Why it qualifies:** Rust-native for speed; zero-setup (no embedding models, no vector DBs, no indexing step); returns structurally complete code units instead of arbitrary text chunks; fully local with no data leaving the machine.
**Proposed tensaicompl name:** `tensai-semantic-code-search`
**Links to concept page:** craft/code-doc-indexing

---

### Hybrid code search MCP (vector + BM25 + tree-sitter, Rust)

**Repo:** `flupkede/codesearch`
**URL:** https://github.com/flupkede/codesearch
**Created/Updated:** 2026 (active)
**Stars:** ~200
**Licence:** MIT
**What it solves:** Multi-repo semantic code search MCP server combining vector similarity (fastembed), BM25 lexical scoring, and exact identifier boosting with reciprocal rank fusion (RRF) — all offline, with tree-sitter AST chunking for structurally aware retrieval.
**Why it qualifies:** Clean Rust implementation of the hybrid retrieval stack specifically for code; combines three retrieval signals with RRF fusion; MCP-native for direct AI agent integration; fully offline.
**Proposed tensaicompl name:** `tensai-hybrid-code-search`
**Links to concept page:** craft/code-doc-indexing

---

### Tree-sitter code indexing server (symbol-level access for LLM agents)

**Repo:** `JaredStewart/coderlm`
**URL:** https://github.com/JaredStewart/coderlm
**Created/Updated:** 2026-02 (initial release)
**Stars:** ~270
**Licence:** MIT
**What it solves:** Tree-sitter-powered code indexing server that gives LLM agents precise, on-demand access to symbols, implementations, callers, tests, and grep across multi-language projects — so agents explore codebases through targeted queries instead of loading everything into context.
**Why it qualifies:** Featured on Hacker News; clean API design (symbols, implementations, callers, tests, grep); solves the "agent dumps entire files into context" problem with surgical symbol-level access.
**Proposed tensaicompl name:** `tensai-code-symbol-server`
**Links to concept page:** craft/code-doc-indexing

---

### AST-powered code tools for AI agents (Rust core)

**Repo:** `cortexkit/aft`
**URL:** https://github.com/cortexkit/aft
**Created/Updated:** 2026 (active)
**Stars:** ~300
**Licence:** MIT
**What it solves:** Tree-sitter-powered code manipulation and analysis toolkit for AI coding agents — provides semantic editing, call-graph navigation, structural search, and indexed code queries with a Rust binary core shared across multiple agent harness adapters.
**Why it qualifies:** Rust core for performance with adapters for OpenCode, Pi, and other agent harnesses; combines analysis (search, symbols, call graphs) with manipulation (semantic editing) in one toolkit; multi-language support.
**Proposed tensaicompl name:** `tensai-ast-agent-toolkit`
**Links to concept page:** craft/code-doc-indexing

---

### AST index search (CLI for AI coding agents)

**Repo:** `defendend/Claude-ast-index-search`
**URL:** https://github.com/defendend/Claude-ast-index-search
**Created/Updated:** 2026 (active)
**Stars:** ~350
**Licence:** MIT
**What it solves:** CLI that uses real ASTs (via tree-sitter) instead of regex heuristics for code indexing — providing accurate symbol extraction, correct handling of nested constructs, and fewer false positives across 12 languages, designed to speed up AI agent code searches.
**Why it qualifies:** Focused on the specific problem of accurate symbol indexing for AI agents; tree-sitter-based detection avoids regex pitfalls; supports 12 languages including Kotlin, Swift, and Dart; includes git worktree integration.
**Proposed tensaicompl name:** `tensai-ast-index-cli`
**Links to concept page:** craft/code-doc-indexing

---

### Local vector search for code (MCP, tree-sitter + embeddings)

**Repo:** `kapillamba4/code-memory`
**URL:** https://github.com/kapillamba4/code-memory
**Created/Updated:** 2026 (active)
**Stars:** ~200
**Licence:** MIT
**What it solves:** MCP server that combines tree-sitter structural parsing with sentence-transformer embeddings for semantic code search — runs entirely locally with no API keys, saving 50% of tokens by retrieving precise code fragments instead of dumping entire files.
**Why it qualifies:** Zero-telemetry, fully local, 1-minute setup via uvx; combines structural (AST) and semantic (embedding) approaches; includes Git history search; purpose-built for the MCP ecosystem.
**Proposed tensaicompl name:** `tensai-code-vector-search`
**Links to concept page:** craft/code-doc-indexing

---

### Local RAG for code and docs (MCP, hybrid search)

**Repo:** `shinpr/mcp-local-rag`
**URL:** https://github.com/shinpr/mcp-local-rag
**Created/Updated:** 2026 (active)
**Stars:** ~270
**Licence:** MIT
**What it solves:** Local-first RAG server for developers that combines semantic search with keyword boosting for code and technical documentation — works as MCP server or CLI, fully private, runs offline after initial model download.
**Why it qualifies:** Bridges the gap between code search and documentation search in one tool; semantic search with keyword boost means exact terms (useEffect, error codes) rank correctly; fully offline and private.
**Proposed tensaicompl name:** `tensai-local-code-doc-rag`
**Links to concept page:** craft/code-doc-indexing
