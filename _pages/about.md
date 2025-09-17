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

<span class='anchor' id='about-me'></span>

# 💡 About Me

Hi, I’m Lang Cheng, currently pursuing a BA in Education Studies at UCL. My research focuses on Learning Analytics, Multimodel Learning Analytics, AI in Education, and Human–Technology Interaction, with a particular interest in how immersive technologies and AI-driven tools can enhance collaboration, motivation, and equity in learning and helping teachers.

I have taken part in multiple international research projects. At The University of Hong Kong (HKU), I joined Professor Hu Xiao's group and contributed to studies on VR/AR-based learning analytics in both secondary and primary schools. My work involved guiding students to create VR stories, designing mixed-method studies, and conducting advanced data analysis (quantitative statistics, NLP-based text mining, and topic modeling). Some of these findings have already been presented at CSCL 2025 and JCDL 2025. I am also working on Epistemic Network Analysis (ENA) projects to explore how teachers use learning analytics platforms in practice. During my summer research at UCL’s **EPSURF**, I joined Professor Jessica Ringrose's group and took part in an interdisciplinary study on adolescent mobile-phone policies, leading the literature review and qualitative data analysis (including MCDA multimodal discourse analysis and topic modelling). I carried out a comparative analysis of student samples from two schools, revealing social-class differences in attitudes toward phone use and in perceptions of policy enforcement.

Beyond research, I gained hands-on product and analytical experience. At iFLYTEK, I worked on AI product management and user behaviour analytics, identifying teachers’ needs in lesson planning and optimising product functions. In the UK, I joined the charity Archives of IT (AIT), where I co-authored articles and communication pieces after its 2025 Forum, strengthening my skills in bridging expert knowledge with public engagement.

I continuously expand my technical foundation through advanced study programs, including Computational Social Science (X Academy Summer School) and Mathematics for Machine Learning (UCL Summer School). These programs equipped me with statistical, machine learning, and NLP methods that directly support my research in education.

Outside academia, I’m passionate about football, baseball, and basketball, which keep me energised, collaborative, and competitive both on and off the field.


# 🔥 News
- *2025.06*: &nbsp;🎉🎉 My academic poster, “Comparing Collaboration Patterns in Virtual Reality Content Co-Creation Activities Between High- and Low-Performing Secondary School Students” has been accepted for inclusion in the Proceedings of the International Conference on Computer-Supported Collaborative Learning!. 
- *2024.12*: &nbsp;🎉🎉 I’m excited to announce that our poster, “Empowering Primary School Students to Create Virtual Reality Content: An Outreach Model for Digital Libraries,” has been accepted for inclusion in the proceedings of the 24th ACM/IEEE Joint Conference on Digital Libraries (JCDL 2024) on December 16, 2024 (DOI: 10.1145/3677389.3702606). Co-authored by KA WAI Lau, X Hu, and myself (Lang Cheng), this work presents a novel outreach framework that enables young learners to author immersive VR experiences within digital library settings, and we look forward to sharing our findings with the community at JCDL. 

# 📝 Publications 

[Comparing Collaboration Patterns in Virtual Reality Content Co-Creation Activities Between High- and Low-Performing Secondary School Students](https://repository.isls.org/bitstream/1/11954/1/CSCL2025_675-677.pdf)

Que Ying, **Lang Cheng**, Tianshu Zhang, Carol K. K. Chan, Xiao Hu

- [Empowering Primary School Students to Create Virtual Reality Content: An Outreach Model for Digital LibrariesEmpowering Primary School Students to Create Virtual Reality Content: An Outreach Model for Digital Libraries](https://dl.acm.org/doi/abs/10.1145/3677389.3702606), Ka Wai Lau, Xiao Hu, **Lang Cheng**, **JCDL 2024**

# 👷 Projects

***HKU — VR/AR learning analytics***

Role: Research team member — teaching implementation & data analysis
Tagline: Facilitated student VR creation and combined interaction logs with reflective responses to investigate collaborative learning processes.

Project summary (copyable):
During a research placement at HKU I worked as part of a team delivering a VR-authoring curriculum to secondary students. I taught students how to use a low-barrier, web-based VR creation tool (360° capture, scene editing, annotations, and cross-space linking), supported their technical needs, and guided a project-based assignment in which students produced group VR stories. We collected interaction logs, instructor ratings of student projects, and open-ended reflective responses. My analysis workflow combined robust survey statistics, systematic text preprocessing, lexical and n-gram analysis, trials of lexicon- and transformer-based sentiment methods, and ultimately topic modeling to surface thematic differences between performance groups. One line of the work (text feature results) was presented as a conference poster and other findings are in a manuscript under preparation.

**Technical highlights**

- *Mixed-methods pipeline: administration and analysis of structured questionnaires combined with interaction-log processing and qualitative response analysis.*

- *NLP workflow: rigorous preprocessing, TF–IDF and n-gram extraction, experiments with lexicon-based and transformer-based sentiment methods, followed by LDA topic modeling and interactive topic visualizations.*

- *Research validation: iterative discussion with PhD mentors and lab members to refine analytic choices and integrate qualitative interpretation with model outputs.*

**Ethics / privacy (one line)**
All student data were anonymized and handled according to institutional ethics guidance; publicly shared materials include only aggregated or synthetic examples.


***HKU — VR/AR learning experience (primary school, environmental theme)***

Role: Research team member — activity lead & data analyst
Tagline: Designed and ran an educational VR day combining student creation and immersive viewing to explore effects on digital literacy and environmental attitudes.

Project summary (copyable):
I helped organize a VR experience day at a primary school that combined hands-on VR creation with immersive VR viewing of environmental story content. Activities included step-by-step student guidance for capturing and editing VR spaces, facilitated group reflection interviews, and pre/post implementation surveys to capture perceived learning and interest. In addition to the classroom study, I analyzed platform event logs exported from our web tool. The log analysis informed usage patterns and user journeys, and the pre/post analyses supported interpretation of how the intervention related to students’ self-reported learning outcomes. Results were summarized and prepared as a conference poster.

**Technical highlights**

- *Platform log analytics: end-to-end cleaning and time-indexing of event logs, event-type frequency analysis, and activity-pattern visualization to reveal usage patterns and common interaction flows.*

- *Experimental evaluation: pre/post questionnaire processing and paired comparisons to evaluate changes in self-reported digital literacy and topic understanding.*

- *Dissemination: synthesis of literature, methods, and results into a poster for academic dissemination.*

**Ethics / privacy (one line)**
Platform data were anonymized before analysis and reporting; classroom participation followed school consent procedures.


***UCL — Teen mobile phone policy research***

Role: Research assistant — literature synthesis & multimodal qualitative analysis
Tagline: Organized cross-disciplinary discussion and used multimodal coding to examine children’s experiences and attitudes toward phone policies across social contexts.

Project summary (copyable):
As part of a team exploring adolescent phone-use policies, I supported organization of interdisciplinary talks, led parts of the literature synthesis, and applied multimodal critical discourse methods to student-produced data (including drawings and interviews). I contributed to systematic coding and thematic analysis and supported comparative interpretation across schools. The analysis highlighted differences in phone use and policy perceptions that aligned with students’ social backgrounds, and the results fed into a broader policy-focused literature review.

***Technical highlights***

- *Research coordination: supported academic discussion forums to connect perspectives across fields and synthesize implications for policy.*

- *Multimodal analysis: applied MCDA methods to combine visual and verbal student data into a coherent coding frame.*

- *Comparative theme analysis: produced a structured thematic map that highlighted differences in attitudes and practices across social groups.*

**Ethics / privacy (one line)**
All pupil contributions were collected under appropriate consent and anonymized prior to analysis.


***HKU (ongoing) — ENA & topic modeling***

Role: Data analyst — topic modeling & ENA pipeline lead
Tagline: Turned free-text teacher feedback into topic-coded inputs for Epistemic Network Analysis to compare discourse networks across instructional phases.

Project summary (copyable):
My current task is to transform a corpus of teacher feedback messages from a learning analytics tool into a format suitable for Epistemic Network Analysis (ENA). The workflow includes text cleaning and phrase detection, iterative LDA topic exploration with coherence-guided selection and manual interpretability checks, thresholding topic probabilities into co-occurrence indicators, and preparing ENA-ready unit tables. These units are then visualized in stage-wise ENA networks to compare how topic co-occurrence evolves across instructional phases.

**Technical highlights**

- *Topic modeling: careful model selection using coherence metrics complemented by manual inspection to ensure interpretability.*

- *ENA workflow: conversion of probabilistic topic outputs into binary co-occurrence matrices and construction of ENA units for stage-wise network comparison.*

- *Reproducibility: end-to-end scripts for cleaning, phrase merging, topic probability mapping, and export to ENA-compatible tables.*

**Ethics / privacy (one line)**
Teacher messages are de-identified before analysis; ENA visualizations present only aggregate network structure without raw text.


***iFlytek — Data analysis & AI product internship***

Role: Data analyst & AI product support (intern)
Tagline: Conducted user-behavior analysis to inform product priorities, diagnosed data integration issues, and prototyped an exemplar AI agent for instructor support.

Project summary (copyable):
During my internship I led analyses of usage logs to surface core user needs and usage trends for an AI-assisted teacher tool. I processed dialogue logs and service metrics to identify which features users relied on most, designed rule-based categorizations to surface common use-cases, and translated findings into product recommendations. I also investigated and documented a cause of broken navigation between visualization components by comparing different data sources and their granularities, and proposed remediation steps. Finally, I designed an exemplar “simulated reviewer” agent to provide targeted pedagogical feedback for a teacher competition, iterating prompt design to improve suggestion quality.

**Technical highlights**

- *User-behavior analysis: extraction and categorization of free-text queries, high-level usage pattern analysis, and generation of prioritized feature recommendations.*

- *Product debugging: cross-source comparison to identify data granularity mismatches and a documented fix plan for broken navigation.*

- *AI prototyping: designed a domain-focused agent with iterative prompt engineering to produce actionable pedagogical suggestions.*


# 🎖 Honors and Awards
- *2025.07* The Education, Practice and Society Undergraduate Research Fellowship (EPSURF) 

# 📖 Educations
- *2023.09 - 2025.12 (now)*, University College London BA(Hons), **Education Studies**. 

# 💻 Internships
- *2025.07 - 2025.09*, iFlytek, China.
