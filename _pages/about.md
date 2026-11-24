---
permalink: /
title: ""
excerpt: ""
redirect_from: 
  - /about/
  - /about.html
---

{% assign author = site.author %}

<div class="panels">

<section class="panel panel--about" id="about" role="tabpanel" aria-labelledby="tab-about">

  <div class="hero">
    <img class="hero__photo" src="{{ author.avatar }}" alt="Portrait of {{ author.name }}">
    <div class="hero__main">
      <h1 class="hero__name">{{ author.name }}</h1>
      <p class="hero__lead">I study how learning analytics and AI can make collaborative learning more visible, and more useful to the teachers running it.</p>
      <div class="hero__text">
        <p>I’m a first-year M.S. student in Education Data Science at Stanford. Before that I did a BA in Education Studies at University College London, graduating with First Class Honours.</p>
        <p>From 2023 to 2026 I was a research assistant in Dr. Xiao Hu’s CCMIR Lab at The University of Hong Kong, working on VR/AR learning analytics, Epistemic Network Analysis, and large language models for qualitative coding. At UCL, as an EPSURF fellow with Professor Jessica Ringrose, I studied adolescent mobile-phone policies through multimodal discourse analysis.</p>
      </div>
    </div>
    <aside class="hero__side" aria-label="Contact and profiles">
      <p class="hero__where">Stanford, California</p>
      <ul class="hero__links">
        {% if author.email %}<li><a href="mailto:{{ author.email }}" target="_self">Email</a></li>{% endif %}
        {% if author.googlescholar %}<li><a href="{{ author.googlescholar }}">Google Scholar</a></li>{% endif %}
        {% if author.linkedin %}<li><a href="{{ author.linkedin }}">LinkedIn</a></li>{% endif %}
        {% if author.orcid %}<li><a href="{{ author.orcid }}">ORCID</a></li>{% endif %}
        {% if author.researchgate %}<li><a href="{{ author.researchgate }}">ResearchGate</a></li>{% endif %}
        {% if author.github %}<li><a href="https://github.com/{{ author.github }}">GitHub</a></li>{% endif %}
      </ul>
    </aside>
  </div>

  {% include research-map.html %}

  <div class="about-grid">
    <div class="about-grid__main" id="news">
      <h2 class="block-title">News</h2>
      <ul class="news">
        <li><time>2026.09</time><span>Started the M.S. in Education Data Science at Stanford.</span></li>
        <li><time>2026.06</time><span>Graduated from UCL with First Class Honours.</span></li>
        <li><time>2026.05</time><span>Received the IEEE TCLT Student Award.</span></li>
        <li><time>2026</time><span>First-author paper on automating Epistemic Network Analysis with LLMs accepted at ICALT 2026.</span></li>
        <li><time>2025.07</time><span>Awarded the EPSURF undergraduate research fellowship at UCL.</span></li>
        <li><time>2025.06</time><span>Poster on collaboration patterns in VR co-creation accepted at CSCL 2025.</span></li>
        <li><time>2024.12</time><span>Poster on an outreach model for student VR creation accepted at JCDL 2024 (<a href="https://doi.org/10.1145/3677389.3702606">DOI</a>).</span></li>
      </ul>
    </div>
    <aside class="about-grid__side">
      <h2 class="block-title">Outside research</h2>
      <p>I play football, baseball and basketball. I also love travelling in Western Europe and am interested in Western European history.</p>
    </aside>
  </div>
</section>

<section class="panel panel--research" id="research" role="tabpanel" aria-labelledby="tab-research" markdown="1">
<aside class="positions">
  <h2 class="block-title">Positions</h2>
  <ul class="entries">
    <li class="entry">
      <h3 class="entry__title">CCMIR Lab, The University of Hong Kong</h3>
      <p class="entry__meta">Research assistant, supervised by Dr. Xiao Hu</p>
      <p class="entry__when">2023.12 – 2026.10</p>
    </li>
    <li class="entry">
      <h3 class="entry__title">University College London</h3>
      <p class="entry__meta">Undergraduate research fellow (EPSURF), supervised by Professor Jessica Ringrose</p>
      <p class="entry__when">2025.05 – 2025.12</p>
    </li>
  </ul>
</aside>

<div class="folds" markdown="1">
<h2 class="block-title">Selected work</h2>


<details class="fold" markdown="1">
<summary><div class="fold__head"><h3 class="fold__title">LLM annotation pipeline for student discussions</h3><span class="fold__org">HKU</span><span class="fold__sign"></span></div><p class="fold__meta">Three-model voting pipeline for qualitative coding</p></summary>
<div class="fold__content" markdown="1">

<p class="fold__lead">Used multiple large language models to automate the coding of student discussions, replacing manual annotation for learning analytics.</p>

I built an automated LLM annotation pipeline in which three models classify each post and a majority vote decides the final label. The pipeline classified 390 student discussion posts and eliminated manual coding. To check its quality, I compared it against a human-labelled random sample (30% of the data), reaching moderate-to-substantial agreement (mean Cohen’s κ = 0.621).

#### Highlights

- **Multi-model voting:** three LLMs label each post independently; majority voting reduces single-model errors.
- **Validation:** agreement with human coders measured with Cohen’s κ on a 30% random sample.

</div>
</details>

<details class="fold" markdown="1">
<summary><img class="fold__thumb" src="https://github.com/user-attachments/assets/568cbf37-1451-4e04-b515-00d0b80bcf8a" alt="" loading="lazy"><div class="fold__head"><h3 class="fold__title">VR/AR learning analytics in secondary schools</h3><span class="fold__org">HKU</span><span class="fold__sign"></span></div><p class="fold__meta">Teaching implementation and data analysis, presented at CSCL 2025</p></summary>
<div class="fold__content" markdown="1">

<p class="fold__lead">Facilitated student VR creation and combined interaction logs with reflective responses to investigate collaborative learning processes.</p>

During a research placement at HKU, I worked as part of a team delivering a VR-authoring curriculum to lower-secondary students. I taught students how to use a low-barrier, web-based VR creation tool (360° capture, scene editing, annotations, and cross-space linking), supported their technical needs, and guided a project-based assignment in which groups produced their own VR stories. We collected interaction logs from the platform, instructor ratings of the projects, a Likert-scale questionnaire on collaborative learning experience, and open-ended reflective responses about collaboration challenges and solutions.

On the analysis side, I combined robust survey statistics with a full NLP pipeline. Using JASP, I ran normality checks (Shapiro–Wilk), homogeneity tests (Levene), non-parametric comparisons (Mann–Whitney U), and Bayesian independent samples tests to compare collaboration experience across performance groups. In Python, I implemented systematic text preprocessing (NLTK-based tokenisation, lemmatisation, stopword removal), TF–IDF and n-gram extraction, and trials of both lexicon-based (VADER) and transformer-based (Twitter-RoBERTa) sentiment methods, evaluating them against a human-coded “gold standard” (accuracy, precision, recall, F1). Because the model performed poorly on neutral responses, I ultimately shifted to LDA topic modelling with coherence-based model selection and interactive pyLDAvis visualisations to surface thematic differences between high- and low-performing groups. One line of the work (text feature results) was presented as a CSCL 2025 poster, and the broader findings are part of a manuscript currently under review.

#### Highlights

- **Large-scale log processing:** processed and analysed 69,000+ multimodal system interaction logs from VR-supported collaborative learning activities using Python (Pandas), with comprehensive data-cleaning pipelines.
- **Mixed-methods pipeline:** integrated a structured collaboration-experience questionnaire with VR interaction logs, instructor ratings, and open-ended reflections to study group collaboration from multiple data sources.
- **Statistics & NLP workflow:** used JASP for normality, non-parametric, and Bayesian tests; built a Python pipeline for rigorous preprocessing, TF–IDF and n-gram extraction, experiments with VADER and Twitter-RoBERTa sentiment, and coherence-guided LDA topic modelling with pyLDAvis visualisation.
- **Sentiment models:** sentiment analysis with pretrained RoBERTa and BERT; predictions were validated against gold-standard labels from independent annotation by two human coders, with disagreements resolved through consensus discussion.
- **Research validation:** iteratively refined analytic choices with PhD mentors and lab members, compared model outputs against human-coded labels, and linked quantitative patterns back to original student reflections to support theoretically grounded interpretation.

<figure>
  <img src="https://github.com/user-attachments/assets/568cbf37-1451-4e04-b515-00d0b80bcf8a" width="1724" height="966" alt="Topic probability by group" loading="lazy">
  <figcaption>Examples of data visualization during the project.</figcaption>
</figure>

<p class="muted">All student data were anonymized and handled according to institutional ethics guidance; publicly shared materials include only aggregated or synthetic examples.</p>

</div>
</details>

<details class="fold" markdown="1">
<summary><img class="fold__thumb" src="https://github.com/user-attachments/assets/9b0aa347-f89c-42e9-a7b9-0233515e0334" alt="" loading="lazy"><div class="fold__head"><h3 class="fold__title">VR learning experience in a primary school</h3><span class="fold__org">HKU</span><span class="fold__sign"></span></div><p class="fold__meta">Activity lead and data analyst, presented at JCDL 2024</p></summary>
<div class="fold__content" markdown="1">

<p class="fold__lead">Designed and ran an educational VR day combining student creation and immersive viewing to explore effects on digital literacy and environmental attitudes.</p>

I helped organize a VR experience day at a primary school that combined hands-on VR creation with immersive VR viewing of environmental story content. Activities included step-by-step student guidance for capturing and editing VR spaces, facilitated group reflection interviews, and pre/post implementation surveys to capture perceived learning and interest. In addition to the classroom study, I analyzed platform event logs exported from our web tool. The log analysis informed usage patterns and user journeys, and the pre/post analyses supported interpretation of how the intervention related to students’ self-reported learning outcomes. Results were summarized and prepared as a conference poster.

#### Highlights

- **Platform log analytics:** end-to-end cleaning and time-indexing of event logs, event-type frequency analysis, and activity-pattern visualization to reveal usage patterns and common interaction flows.
- **Experimental evaluation:** pre/post-test data analysed with paired-samples t-tests, finding a statistically significant improvement in students’ digital literacy.
- **Exploratory data analysis:** uncovered long-tail user activity distributions and temporal patterns, producing user-hour heatmaps and behavioural summaries.
- **Dissemination:** synthesis of literature, methods, and results into a poster for academic dissemination.

<figure>
  <img src="https://github.com/user-attachments/assets/9b0aa347-f89c-42e9-a7b9-0233515e0334" width="2048" height="1155" alt="Hourly activity by group" loading="lazy">
  <figcaption>Hourly platform activity by group.</figcaption>
</figure>

<p class="muted">Platform data were anonymized before analysis and reporting; classroom participation followed school consent procedures.</p>

</div>
</details>

<details class="fold" markdown="1">
<summary><div class="fold__head"><h3 class="fold__title">Epistemic Network Analysis &amp; topic modeling</h3><span class="fold__org">HKU</span><span class="fold__sign"></span></div><p class="fold__meta">Lead on the topic modeling and ENA pipeline</p></summary>
<div class="fold__content" markdown="1">

<p class="fold__lead">Turned free-text teacher feedback into topic-coded inputs for Epistemic Network Analysis to compare discourse networks across instructional phases.</p>

I transform a corpus of teacher feedback messages from a learning analytics tool into a format suitable for Epistemic Network Analysis (ENA). The workflow includes text cleaning and phrase detection, iterative LDA topic exploration with coherence-guided selection and manual interpretability checks, thresholding topic probabilities into co-occurrence indicators, and preparing ENA-ready unit tables. These units are then visualized in stage-wise ENA networks to compare how topic co-occurrence evolves across instructional phases.

#### Highlights

- **Topic modeling:** careful model selection using coherence metrics complemented by manual inspection to ensure interpretability.
- **ENA workflow:** conversion of probabilistic topic outputs into binary co-occurrence matrices and construction of ENA units for stage-wise network comparison.
- **Reproducibility:** end-to-end scripts for cleaning, phrase merging, topic probability mapping, and export to ENA-compatible tables.

<p class="muted">Teacher messages are de-identified before analysis; ENA visualizations present only aggregate network structure without raw text.</p>

</div>
</details>

<details class="fold" markdown="1">
<summary><div class="fold__head"><h3 class="fold__title">Behavioural sequence analysis</h3><span class="fold__org">HKU</span><span class="fold__sign"></span></div><p class="fold__meta">Sequence mining and clustering in R</p></summary>
<div class="fold__content" markdown="1">

<p class="fold__lead">Grouped students by how their learning behaviours unfold over time.</p>

I analysed behavioural sequence data from 165 students using Optimal Matching (OM) distance and PAM clustering in R, and evaluated the resulting clusters with silhouette analysis.

</div>
</details>

<details class="fold" markdown="1">
<summary><div class="fold__head"><h3 class="fold__title">Smartphone Free Childhoods</h3><span class="fold__org">UCL</span><span class="fold__sign"></span></div><p class="fold__meta">Literature synthesis and multimodal qualitative analysis</p></summary>
<div class="fold__content" markdown="1">

<p class="fold__lead">Organized cross-disciplinary discussion and used multimodal coding to examine children’s experiences and attitudes toward phone policies across social contexts.</p>

As part of a team exploring adolescent phone-use policies, I supported organization of interdisciplinary talks, led parts of the literature synthesis, and applied multimodal critical discourse methods to student-produced data (including drawings and interviews). I contributed to systematic coding and thematic analysis and supported comparative interpretation across schools. The analysis highlighted differences in phone use and policy perceptions that aligned with students’ social backgrounds, and the results fed into a broader policy-focused literature review.

#### Highlights

- **Literature review:** structured review of smartphone bans and their impacts on adolescents in the UK.
- **Multimodal analysis:** applied MCDA methods to combine visual and verbal student data into a coherent coding frame, examining differences in algorithmically recommended content across socioeconomic contexts.
- **Text visualisation:** visualised high-frequency lexical patterns in student-generated data using Python (Seaborn).
- **Parental interviews:** thematic coding of parent interviews to examine levels of support for smartphone-ban policies and the reasons behind approval or opposition.
- **Research coordination:** supported academic discussion forums to connect perspectives across fields and synthesize implications for policy.

<p class="muted">All pupil contributions were collected under appropriate consent and anonymized prior to analysis.</p>

</div>
</details>

</div>
</section>

<section class="panel panel--pubs" id="publications" role="tabpanel" aria-labelledby="tab-publications">
  {% include publications.html %}
</section>

<section class="panel panel--projects" id="projects" role="tabpanel" aria-labelledby="tab-projects">
  {% include projects.html %}
</section>

<section class="panel panel--background" id="background" role="tabpanel" aria-labelledby="tab-background">
  <div class="col" id="education">
    <h2 class="block-title">Education</h2>
    <ul class="entries">
      <li class="entry">
        <h3 class="entry__title">Stanford University</h3>
        <p class="entry__meta">M.S. in Education Data Science</p>
        <p class="entry__when">2026 – 2028</p>
        <p class="entry__note">Statistical Methods, Data Processing, Collaborative Learning Analytics with NLP/LLMs, Machine Learning</p>
      </li>
      <li class="entry">
        <h3 class="entry__title">University College London</h3>
        <p class="entry__meta">BA (Hons) in Education Studies, First Class Honours, GPA 3.89 (WES)</p>
        <p class="entry__when">2023 – 2026</p>
        <p class="entry__note">Quantitative Analysis, Quantitative &amp; Qualitative Methods, Education Policy Analysis, Survey Instrument Design</p>
      </li>
    </ul>
  </div>

  <div class="col" id="honors">
    <h2 class="block-title">Honors</h2>
    <ul class="entries">
      <li class="entry">
        <h3 class="entry__title">IEEE TCLT Student Award</h3>
        <p class="entry__when">2026</p>
      </li>
      <li class="entry">
        <h3 class="entry__title">Education, Practice and Society Undergraduate Research Fellowship (EPSURF)</h3>
        <p class="entry__meta">University College London</p>
        <p class="entry__when">2025</p>
      </li>
    </ul>
  </div>

  <div class="col" id="skills">
    <h2 class="block-title">Skills</h2>
    <dl class="kv">
      <div><dt>Data science</dt><dd>Python, R, SQL, SPSS, JASP, pandas, scikit-learn, NLTK, Hugging Face, TraMineR, NVivo, Seaborn</dd></div>
      <div><dt>AI</dt><dd>Prompt engineering, LLM evaluation</dd></div>
      <div><dt>Training</dt><dd>Mathematics for Machine Learning, UCL Summer School (2025); Mathematics for ML and Data Science Specialization, DeepLearning.AI (2025); Computational Social Science, X Academy Summer School</dd></div>
      <div><dt>Languages</dt><dd>Mandarin Chinese (native), English (fluent)</dd></div>
    </dl>
  </div>
</section>

</div>
