document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    function switchTab(tabId) {
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        const selectedButton = document.querySelector(`[data-tab="${tabId}"]`);
        const selectedContent = document.getElementById(tabId);
        
        if (selectedButton && selectedContent) {
            selectedButton.classList.add('active');
            selectedContent.classList.add('active');
        }
    }

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.getAttribute('data-tab');
            switchTab(tabId);
        });
    });

    const threadForm = document.getElementById('threadForm');
    if (threadForm) {
        threadForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(threadForm);
            console.log('Form submitted:', Object.fromEntries(formData));
            threadForm.reset();
        });
    }

    const toolbarButtons = document.querySelectorAll('.toolbar-btn');
    toolbarButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Toolbar button clicked:', this.innerHTML);
        });
    });

    const floatingButtons = document.querySelectorAll('.float-btn');
    floatingButtons.forEach(button => {
        button.addEventListener('click', function() {
            console.log('Floating button clicked:', this.innerHTML);
        });
    });

    switchTab('tech-management');

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    const mediaQuery = window.matchMedia('(max-width: 768px)');
    function handleResponsive(e) {
        if (e.matches) {
            console.log('Mobile view active');
        } else {
            console.log('Desktop view active');
        }
    }
    mediaQuery.addListener(handleResponsive);
    handleResponsive(mediaQuery);
});

const projectData = {
    "_id": {
        "$oid": "63b64dc9e3b230ebb60a495d"
    },
    "_key": "topic:2085",
    "category": "Course",
    "cid": {
        "$numberDouble": "NaN"
    },
    "commitment": "4 hours",
    "commitment_type": "custom",
    "deadline": "",
    "description": "<p>Have you ever thought, Pareto's Law can be applied to cooking? Your thinking starts when you start thinking beyond your thinking.</p>\n<p>Let's prepare Sandwiches, we will use Pareto&rsquo;s Law. That&rsquo;s an 80-20 approach.<br>80% of the time in researching, and planning and 20% of the time in implementation.</p>\n<p>So for preparing sandwiches, we need vegetables, bread, cheese, butter and much more. So initially we collect all the stuff and then chop the vegetables, grate the cheese, and make a mash of potato. So this all comes in 80% and then comes 20% where we will roast the bread, spread the sauce, place the mash put some cheese, and heat it for a while and our sandwich is ready.</p>\n<p>Similarly while creating any functionality 80% of the time is spent on consequences that might appear, some parameters we have to take care of, the scope of the variable, and some dependent functions, and then 20% comes from implementation.</p>\n<p>Let's start thinking together, and search for how you can get the essence of project management.</p>",
    "faqs": [],
    "globalTags": [],
    "isActive": true,
    "lastposttime": 0,
    "learning_outcomes": [
        "Bare minimum knowledge of project management",
        "4SA Concept",
        "Would be able to handle any project efficiently"
    ],
    "mainPid": 0,
    "postcount": 0,
    "pre_requisites": [
        "An open mind to learn any concept",
        "Thought of Unlearning and Relearning "
    ],
    "project_image": "https://bs-uploads.toptal.io/blackfish-uploads/components/seo/content/og_image_file/og_image/1114276/0413_What_is_a_Technical_Project_Manager_Luke_Social-21e35c2d76465934c0f844c396db762a.png",
    "short_description": "You can learn project management by applying the simple methods of project management. How you can apply project management in each and every step of your deliverables? Let's figure it out together",
    "slug": "2085/technical-project-management",
    "status": "published",
    "tasks": [
        {
            "task_id": 18882,
            "task_title": "Explore the world of management",
            "task_description": "As a project manager, you play an important role in leading a project through initiation, planning, execution, monitoring, controlling and completion. How? Do you want to manage each and every step of your life?",
            "status": "notworkyet",
            "assets": [
                {
                    "asset_id": 18883,
                    "asset_title": "Technical Project Management",
                    "asset_description": "Story of Alignment\r\nScope of Agility\r\nSpecific Accountable \r\nStaggering Approach\r\n\r\n",
                    "asset_content": " https://www.youtube.com/embed/TiMRwri1xJ8",
                    "asset_type": "display_asset",
                    "asset_content_type": "video"
                },
                {
                    "asset_id": 18884,
                    "asset_title": "Threadbuild",
                    "asset_description": "Watch the video and thread build, and jot out key threads while watching that video.",
                    "asset_content": " ",
                    "asset_type": "input_asset",
                    "asset_content_type": "threadbuilder"
                },
                {
                    "asset_id": 18885,
                    "asset_title": "Structure you pointers ",
                    "asset_description": "Write a 400-500 word article, from your thread. Publish your understanding, and showcase your learning to the entire world.",
                    "asset_content": " ",
                    "asset_type": "input_asset",
                    "asset_content_type": "article"
                },
                {
                    "asset_id": 18886,
                    "asset_title": "4SA Method",
                    "asset_description": "To explore more read more",
                    "asset_content": " https://dtthon.deepthought.education/sharer?id=01aa3cff-db8e-8d9d-afc0-1671715937878",
                    "asset_type": "display_asset",
                    "asset_content_type": "article"
                }
            ]
        }
    ],
    "tid": 2085,
    "timestamp": 1672891849700,
    "title": "Technical Project Management",
    "type": "project",
    "uid": 100,
    "viewcount": 0,
    "publishedAt": 1672893847792
};

const assetContainers = {
    video: function(asset) {
        const template = document.getElementById('video-asset-template');
        const container = template.content.cloneNode(true);
        
        container.querySelector('.asset-title').textContent = asset.asset_title;
        container.querySelector('.asset-description').textContent = asset.asset_description;
        container.querySelector('.video-frame').src = asset.asset_content;
        
        return container;
    },
    
    article: function(asset) {
        const template = document.getElementById('article-asset-template');
        const container = template.content.cloneNode(true);
        
        container.querySelector('.asset-title').textContent = asset.asset_title;
        container.querySelector('.asset-description').textContent = asset.asset_description;
        
        const submitBtn = container.querySelector('.submit-btn');
        submitBtn.addEventListener('click', () => {
            const content = container.querySelector('.article-input').value;
            submitAsset(asset.asset_id, 'article', content);
        });
        
        return container;
    },
    
    threadbuilder: function(asset) {
        const template = document.getElementById('threadbuilder-asset-template');
        const container = template.content.cloneNode(true);
        
        container.querySelector('.asset-title').textContent = asset.asset_title;
        container.querySelector('.asset-description').textContent = asset.asset_description;
        
        const submitBtn = container.querySelector('.submit-btn');
        submitBtn.addEventListener('click', () => {
            const content = container.querySelector('.thread-input').value;
            submitAsset(asset.asset_id, 'thread', content);
        });
        
        return container;
    }
};

function renderTask(task) {
    const taskSection = document.createElement('section');
    taskSection.className = 'task-section';
    
    const taskHeader = document.createElement('div');
    taskHeader.className = 'task-header';
    taskHeader.innerHTML = `
        <h2 class="task-title">${task.task_title}</h2>
        <p class="task-description">${task.task_description}</p>
    `;
    
    const assetsContainer = document.createElement('div');
    assetsContainer.className = 'assets-container';
    
    task.assets.forEach(asset => {
        const assetType = asset.asset_content_type;
        if (assetContainers[assetType]) {
            const assetElement = assetContainers[assetType](asset);
            assetsContainer.appendChild(assetElement);
        }
    });
    
    taskSection.appendChild(taskHeader);
    taskSection.appendChild(assetsContainer);
    return taskSection;
}

function submitAsset(assetId, type, content) {
    console.log(`Submitting ${type} for asset ${assetId}:`, content);
    alert('Content submitted successfully!');
}

document.addEventListener('DOMContentLoaded', function() {
    const projectContainer = document.getElementById('project-container');
    
    projectData.tasks.forEach(task => {
        const taskElement = renderTask(task);
        projectContainer.appendChild(taskElement);
    });
});

window.addEventListener('error', function(e) {
    console.error('An error occurred:', e.error);
});