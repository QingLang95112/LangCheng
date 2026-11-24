---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<div class="hero reveal">
  <p class="hero__eyebrow">M.S. Education Data Science @ Stanford</p>
  <h1 class="hero__title">Hi, I’m Lang Cheng <span class="wave" aria-hidden="true">👋</span></h1>
  <p class="hero__lead">I study how learning analytics, AI and immersive technologies can make learning more collaborative, motivating and equitable — and how they can better support teachers.</p>
  <ul class="interest-chips">
    <li>Learning Analytics</li>
    <li>Multimodal Learning Analytics</li>
    <li>AI in Education</li>
    <li>Human–Technology Interaction</li>
    <li>VR / AR in Education</li>
    <li>LLMs for Learning Analytics</li>
  </ul>
</div>

# About Me {#about-me}

Hi, I’m Lang Cheng, currently an M.S. student in **Education Data Science at Stanford University**. I received my BA in Education Studies from **University College London (UCL)** with First Class Honours. My research focuses on Learning Analytics, Multimodal Learning Analytics, AI in Education, and Human–Technology Interaction, with a particular interest in how immersive technologies and AI-driven tools can enhance collaboration, motivation, and equity in learning and helping teachers.

I have taken part in multiple international research projects. At The University of Hong Kong (HKU), I joined Professor Hu Xiao's group and contributed to studies on VR/AR-based learning analytics in both secondary and primary schools. My work involved guiding students to create VR stories, designing mixed-method studies, and conducting advanced data analysis (quantitative statistics, NLP-based text mining, and topic modeling). Some of these findings have already been presented at CSCL 2025 and JCDL 2024. I also work on Epistemic Network Analysis (ENA) and on using large language models to automate qualitative coding — this line of work led to my first-authored paper at ICALT 2026. During my summer research at UCL’s **EPSURF**, I joined Professor Jessica Ringrose's group and took part in an interdisciplinary study on adolescent mobile-phone policies, leading the literature review and qualitative data analysis (including MCDA multimodal discourse analysis and topic modelling). I carried out a comparative analysis of student samples from two schools, revealing social-class differences in attitudes toward phone use and in perceptions of policy enforcement.

I continuously expand my technical foundation through advanced study programs, including Computational Social Science (X Academy Summer School) and Mathematics for Machine Learning (UCL Summer School). These programs equipped me with statistical, machine learning, and NLP methods that directly support my research in education.

Outside academia, I’m passionate about football ⚽, baseball ⚾, and basketball 🏀, which keep me energised, collaborative, and competitive both on and off the field.

# News {#news}

<ul class="timeline">
  <li class="reveal">
    <span class="timeline__date">2026.09</span>
    <div class="timeline__body">🌲 Started my M.S. in <strong>Education Data Science</strong> at <strong>Stanford University</strong>.</div>
  </li>
  <li class="reveal">
    <span class="timeline__date">2026.06</span>
    <div class="timeline__body">🎓 Graduated from UCL with a BA in Education Studies, <strong>First Class Honours</strong>.</div>
  </li>
  <li class="reveal">
    <span class="timeline__date">2026.05</span>
    <div class="timeline__body">🏆 Received the <strong>IEEE TCLT Student Award</strong>.</div>
  </li>
  <li class="reveal">
    <span class="timeline__date">2026</span>
    <div class="timeline__body">📄 My first-authored paper, “<em>Automating Epistemic Network Analysis with Large Language Models: A Design-aware Learning Analytics Approach</em>,” was accepted at the 26th IEEE International Conference on Advanced Learning Technologies (<strong>ICALT 2026</strong>).</div>
  </li>
  <li class="reveal">
    <span class="timeline__date">2025.06</span>
    <div class="timeline__body">🎉 My academic poster, “<em>Comparing Collaboration Patterns in Virtual Reality Content Co-Creation Activities Between High- and Low-Performing Secondary School Students</em>” has been accepted for inclusion in the Proceedings of the International Conference on Computer-Supported Collaborative Learning (<strong>CSCL 2025</strong>)!</div>
  </li>
  <li class="reveal">
    <span class="timeline__date">2024.12</span>
    <div class="timeline__body">🎉 I’m excited to announce that our poster, “<em>Empowering Primary School Students to Create Virtual Reality Content: An Outreach Model for Digital Libraries</em>,” has been accepted for inclusion in the proceedings of the 24th ACM/IEEE Joint Conference on Digital Libraries (<strong>JCDL 2024</strong>) on December 16, 2024 (DOI: <a href="https://doi.org/10.1145/3677389.3702606">10.1145/3677389.3702606</a>). Co-authored by Ka Wai Lau, Xiao Hu, and myself (Lang Cheng), this work presents a novel outreach framework that enables young learners to author immersive VR experiences within digital library settings, and we look forward to sharing our findings with the community at JCDL.</div>
  </li>
</ul>

# Publications {#publications}

{% include publications.html %}

# Research Experience {#research}

<div class="position-list">
  <div class="edu-card reveal">
    <div class="edu-card__logo edu-card__logo--hku" aria-hidden="true">HKU</div>
    <div class="edu-card__body">
      <div class="edu-card__school">Research Assistant · CCMIR Lab, The University of Hong Kong</div>
      <div class="edu-card__degree">Supervisor: Dr. Xiao Hu</div>
    </div>
    <div class="edu-card__date">2023.12 – 2026.10</div>
  </div>
  <div class="edu-card reveal">
    <div class="edu-card__logo" aria-hidden="true">UCL</div>
    <div class="edu-card__body">
      <div class="edu-card__school">Undergraduate Research Fellow (EPSURF) · University College London</div>
      <div class="edu-card__degree">Supervisor: Professor Jessica Ringrose</div>
    </div>
    <div class="edu-card__date">2025.05 – 2025.12</div>
  </div>
</div>

<div class="research-card reveal" markdown="1">
<div class="research-card__head">
  <span class="org-badge">HKU</span>
  <h3 class="research-card__title">LLM annotation pipeline for student discussions</h3>
</div>
<p class="research-card__role"><i class="fas fa-fw fa-user" aria-hidden="true"></i> Research assistant — LLM-based qualitative coding</p>
<p class="research-card__tagline">Used multiple large language models to automate the coding of student discussions, replacing manual annotation for learning analytics.</p>

I built an automated LLM annotation pipeline in which three models classify each post and a majority vote decides the final label. The pipeline classified 390 student discussion posts and eliminated manual coding. To check its quality, I compared it against a human-labelled random sample (30% of the data), reaching moderate-to-substantial agreement (mean Cohen’s κ = 0.621).

<details markdown="1">
<summary>Technical highlights</summary>

- **Multi-model voting:** three LLMs label each post independently; majority voting reduces single-model errors.
- **Validation:** agreement with human coders measured with Cohen’s κ on a 30% random sample.
</details>
</div>

<div class="research-card reveal" markdown="1">
<div class="research-card__head">
  <span class="org-badge">HKU</span>
  <h3 class="research-card__title">VR/AR learning analytics</h3>
</div>
<p class="research-card__role"><i class="fas fa-fw fa-user" aria-hidden="true"></i> Research team member — teaching implementation &amp; data analysis</p>
<p class="research-card__tagline">Facilitated student VR creation and combined interaction logs with reflective responses to investigate collaborative learning processes.</p>

During a research placement at HKU, I worked as part of a team delivering a VR-authoring curriculum to lower-secondary students. I taught students how to use a low-barrier, web-based VR creation tool (360° capture, scene editing, annotations, and cross-space linking), supported their technical needs, and guided a project-based assignment in which groups produced their own VR stories. We collected interaction logs from the platform, instructor ratings of the projects, a Likert-scale questionnaire on collaborative learning experience, and open-ended reflective responses about collaboration challenges and solutions.

On the analysis side, I combined robust survey statistics with a full NLP pipeline. Using JASP, I ran normality checks (Shapiro–Wilk), homogeneity tests (Levene), non-parametric comparisons (Mann–Whitney U), and Bayesian independent samples tests to compare collaboration experience across performance groups. In Python, I implemented systematic text preprocessing (NLTK-based tokenisation, lemmatisation, stopword removal), TF–IDF and n-gram extraction, and trials of both lexicon-based (VADER) and transformer-based (Twitter-RoBERTa) sentiment methods, evaluating them against a human-coded “gold standard” (accuracy, precision, recall, F1). Because the model performed poorly on neutral responses, I ultimately shifted to LDA topic modelling with coherence-based model selection and interactive pyLDAvis visualisations to surface thematic differences between high- and low-performing groups. One line of the work (text feature results) was presented as a CSCL 2025 poster, and the broader findings are part of a manuscript currently under review.

<details markdown="1">
<summary>Technical highlights &amp; ethics</summary>

- **Large-scale log processing:** processed and analysed 69,000+ multimodal system interaction logs from VR-supported collaborative learning activities using Python (Pandas), with comprehensive data-cleaning pipelines.
- **Mixed-methods pipeline:** Integrated a structured collaboration-experience questionnaire with VR interaction logs, instructor ratings, and open-ended reflections to study group collaboration from multiple data sources.
- **Statistics & NLP workflow:** Used JASP for normality, non-parametric, and Bayesian tests; built a Python pipeline for rigorous preprocessing, TF–IDF and n-gram extraction, experiments with VADER and Twitter-RoBERTa sentiment, and coherence-guided LDA topic modelling with pyLDAvis visualisation.
- **Sentiment models:** sentiment analysis with pretrained RoBERTa and BERT; predictions were validated against gold-standard labels from independent annotation by two human coders, with disagreements resolved through consensus discussion.
- **Research validation:** Iteratively refined analytic choices with PhD mentors and lab members, compared model outputs against human-coded labels, and linked quantitative patterns back to original student reflections to support theoretically grounded interpretation.

<p class="research-card__ethics"><i class="fas fa-fw fa-shield-alt" aria-hidden="true"></i> All student data were anonymized and handled according to institutional ethics guidance; publicly shared materials include only aggregated or synthetic examples.</p>
</details>

<figure class="research-card__figure">
  <img src="https://github.com/user-attachments/assets/568cbf37-1451-4e04-b515-00d0b80bcf8a" width="1724" height="966" alt="Examples of data visualization during internship" loading="lazy">
  <figcaption>Examples of data visualization during internship</figcaption>
</figure>
</div>

<div class="research-card reveal" markdown="1">
<div class="research-card__head">
  <span class="org-badge">HKU</span>
  <h3 class="research-card__title">VR/AR learning experience (primary school, environmental theme)</h3>
</div>
<p class="research-card__role"><i class="fas fa-fw fa-user" aria-hidden="true"></i> Research team member — activity lead &amp; data analyst</p>
<p class="research-card__tagline">Designed and ran an educational VR day combining student creation and immersive viewing to explore effects on digital literacy and environmental attitudes.</p>

I helped organize a VR experience day at a primary school that combined hands-on VR creation with immersive VR viewing of environmental story content. Activities included step-by-step student guidance for capturing and editing VR spaces, facilitated group reflection interviews, and pre/post implementation surveys to capture perceived learning and interest. In addition to the classroom study, I analyzed platform event logs exported from our web tool. The log analysis informed usage patterns and user journeys, and the pre/post analyses supported interpretation of how the intervention related to students’ self-reported learning outcomes. Results were summarized and prepared as a conference poster.

<details markdown="1">
<summary>Technical highlights &amp; ethics</summary>

- **Platform log analytics:** end-to-end cleaning and time-indexing of event logs, event-type frequency analysis, and activity-pattern visualization to reveal usage patterns and common interaction flows.
- **Experimental evaluation:** pre/post-test data analysed with paired-samples t-tests, finding a statistically significant improvement in students’ digital literacy.
- **Exploratory data analysis:** uncovered long-tail user activity distributions and temporal patterns, producing user-hour heatmaps and behavioural summaries.
- **Dissemination:** synthesis of literature, methods, and results into a poster for academic dissemination.

<p class="research-card__ethics"><i class="fas fa-fw fa-shield-alt" aria-hidden="true"></i> Platform data were anonymized before analysis and reporting; classroom participation followed school consent procedures.</p>
</details>

<figure class="research-card__figure">
  <img src="https://github.com/user-attachments/assets/9b0aa347-f89c-42e9-a7b9-0233515e0334" width="2048" height="1155" alt="VR learning experience day at a primary school" loading="lazy">
</figure>
</div>

<div class="research-card reveal" markdown="1">
<div class="research-card__head">
  <span class="org-badge org-badge--ucl">UCL</span>
  <h3 class="research-card__title">Teen mobile phone policy research — “Smartphone Free Childhoods”</h3>
</div>
<p class="research-card__role"><i class="fas fa-fw fa-user" aria-hidden="true"></i> Research assistant — literature synthesis &amp; multimodal qualitative analysis</p>
<p class="research-card__tagline">Organized cross-disciplinary discussion and used multimodal coding to examine children’s experiences and attitudes toward phone policies across social contexts.</p>

As part of a team exploring adolescent phone-use policies, I supported organization of interdisciplinary talks, led parts of the literature synthesis, and applied multimodal critical discourse methods to student-produced data (including drawings and interviews). I contributed to systematic coding and thematic analysis and supported comparative interpretation across schools. The analysis highlighted differences in phone use and policy perceptions that aligned with students’ social backgrounds, and the results fed into a broader policy-focused literature review.

<details markdown="1">
<summary>Technical highlights &amp; ethics</summary>

- **Research coordination:** supported academic discussion forums to connect perspectives across fields and synthesize implications for policy.
- **Multimodal analysis:** applied MCDA methods to combine visual and verbal student data into a coherent coding frame.
- **Text visualisation:** visualised high-frequency lexical patterns in student-generated data using Python (Seaborn).
- **Parental interviews:** thematic coding of parent interviews to examine levels of support for smartphone-ban policies and the reasons behind approval or opposition.
- **Comparative theme analysis:** produced a structured thematic map that highlighted differences in attitudes and practices across social groups.

<p class="research-card__ethics"><i class="fas fa-fw fa-shield-alt" aria-hidden="true"></i> All pupil contributions were collected under appropriate consent and anonymized prior to analysis.</p>
</details>
</div>

<div class="research-card reveal" markdown="1">
<div class="research-card__head">
  <span class="org-badge">HKU</span>
  <h3 class="research-card__title">ENA &amp; topic modeling</h3>
</div>
<p class="research-card__role"><i class="fas fa-fw fa-user" aria-hidden="true"></i> Data analyst — topic modeling &amp; ENA pipeline lead</p>
<p class="research-card__tagline">Turned free-text teacher feedback into topic-coded inputs for Epistemic Network Analysis to compare discourse networks across instructional phases.</p>

My current task is to transform a corpus of teacher feedback messages from a learning analytics tool into a format suitable for Epistemic Network Analysis (ENA). The workflow includes text cleaning and phrase detection, iterative LDA topic exploration with coherence-guided selection and manual interpretability checks, thresholding topic probabilities into co-occurrence indicators, and preparing ENA-ready unit tables. These units are then visualized in stage-wise ENA networks to compare how topic co-occurrence evolves across instructional phases.

<details markdown="1">
<summary>Technical highlights &amp; ethics</summary>

- **Topic modeling:** careful model selection using coherence metrics complemented by manual inspection to ensure interpretability.
- **ENA workflow:** conversion of probabilistic topic outputs into binary co-occurrence matrices and construction of ENA units for stage-wise network comparison.
- **Reproducibility:** end-to-end scripts for cleaning, phrase merging, topic probability mapping, and export to ENA-compatible tables.

<p class="research-card__ethics"><i class="fas fa-fw fa-shield-alt" aria-hidden="true"></i> Teacher messages are de-identified before analysis; ENA visualizations present only aggregate network structure without raw text.</p>
</details>
</div>

<div class="research-card reveal" markdown="1">
<div class="research-card__head">
  <span class="org-badge">HKU</span>
  <h3 class="research-card__title">Behavioural sequence analysis</h3>
</div>
<p class="research-card__role"><i class="fas fa-fw fa-user" aria-hidden="true"></i> Research assistant — sequence mining &amp; clustering in R</p>
<p class="research-card__tagline">Grouped students by how their learning behaviours unfold over time.</p>

I analysed behavioural sequence data from 165 students using Optimal Matching (OM) distance and PAM clustering in R, and evaluated the resulting clusters with silhouette analysis.
</div>

# Projects {#projects}

<p class="section-intro">Small tools and side projects I’ve built.</p>

{% include projects.html %}

# Honors and Awards {#honors-and-awards}

<ul class="timeline timeline--compact">
  <li class="reveal"><span class="timeline__date">2026.05</span><div class="timeline__body">🏆 IEEE TCLT Student Award</div></li>
  <li class="reveal"><span class="timeline__date">2025.07</span><div class="timeline__body">🎓 The Education, Practice and Society Undergraduate Research Fellowship (<strong>EPSURF</strong>)</div></li>
</ul>

# Education {#education}

<div class="position-list">
  <div class="edu-card reveal">
    <div class="edu-card__logo edu-card__logo--stanford" aria-hidden="true">SU</div>
    <div class="edu-card__body">
      <div class="edu-card__school">Stanford University</div>
      <div class="edu-card__degree">M.S., <strong>Education Data Science</strong> · Stanford, CA</div>
      <div class="edu-card__extra"><strong>Coursework:</strong> Statistical Methods, Data Processing, Collaborative Learning Analytics with NLP/LLMs, Machine Learning</div>
    </div>
    <div class="edu-card__date">2026.09 – 2028.06</div>
  </div>
  <div class="edu-card reveal">
    <div class="edu-card__logo" aria-hidden="true">UCL</div>
    <div class="edu-card__body">
      <div class="edu-card__school">University College London</div>
      <div class="edu-card__degree">BA (Hons), <strong>Education Studies</strong> · First Class Honours · GPA 3.89 (WES) · London, UK</div>
      <div class="edu-card__extra"><strong>Coursework:</strong> Quantitative Analysis, Quantitative &amp; Qualitative Methods, Education Policy Analysis, Survey Instrument Design</div>
    </div>
    <div class="edu-card__date">2023.09 – 2026.06</div>
  </div>
</div>

# Skills {#skills}

<div class="skill-list reveal">
  <div class="skill-row">
    <div class="skill-row__label"><i class="fas fa-fw fa-chart-bar" aria-hidden="true"></i> Data Science</div>
    <ul class="interest-chips"><li>Python</li><li>R</li><li>SQL</li><li>SPSS</li><li>pandas</li><li>scikit-learn</li><li>NLTK</li><li>Hugging Face</li><li>TraMineR</li><li>NVivo</li><li>Seaborn</li><li>JASP</li></ul>
  </div>
  <div class="skill-row">
    <div class="skill-row__label"><i class="fas fa-fw fa-robot" aria-hidden="true"></i> AI</div>
    <ul class="interest-chips"><li>Prompt Engineering</li><li>LLM Evaluation</li><li>LLM Annotation Pipelines</li></ul>
  </div>
  <div class="skill-row">
    <div class="skill-row__label"><i class="fas fa-fw fa-certificate" aria-hidden="true"></i> Certificates</div>
    <ul class="interest-chips"><li>Mathematics for Machine Learning — UCL Summer School (2025)</li><li>Mathematics for ML &amp; Data Science Specialization — DeepLearning.AI (2025)</li></ul>
  </div>
  <div class="skill-row">
    <div class="skill-row__label"><i class="fas fa-fw fa-language" aria-hidden="true"></i> Languages</div>
    <ul class="interest-chips"><li>Mandarin Chinese (Native)</li><li>English (Fluent)</li></ul>
  </div>
  <div class="skill-row">
    <div class="skill-row__label"><i class="fas fa-fw fa-heart" aria-hidden="true"></i> Interests</div>
    <ul class="interest-chips"><li>⚽ Soccer</li><li>🏀 Basketball</li><li>✈️ Travel in Western Europe</li><li>🏰 Western European History</li></ul>
  </div>
</div>
