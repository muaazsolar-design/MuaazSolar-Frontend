  function toggleMenu() {
            const navLinks = document.getElementById('navLinks');
            const hamburger = document.querySelector('.hamburger');
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        }

        function closeMenu() {
            const navLinks = document.getElementById('navLinks');
            const hamburger = document.querySelector('.hamburger');
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        }

        document.getElementById('calcForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const monthlyBill = parseFloat(document.getElementById('monthlyBill').value);
            const roofSize = parseFloat(document.getElementById('roofSize').value);
            const location = document.getElementById('location').value;
            const sunlight = parseFloat(document.getElementById('sunlight').value);
            
            const avgCostPerWatt = 2.8;
            const systemSizeKW = (monthlyBill * 12) / (1200 * (sunlight / 6));
            const panelsNeeded = Math.ceil(systemSizeKW * 1000 / 350);
            const totalCost = systemSizeKW * 1000 * avgCostPerWatt;
            const annualSavings = monthlyBill * 12 * 0.92;
            
            const locationMultiplier = {
                'residential': 1.0,
                'commercial': 0.9,
                'industrial': 0.85
            };
            
            const finalCost = totalCost * locationMultiplier[location];
            
            document.getElementById('estimatedCost').textContent = '$' + finalCost.toFixed(0);
            document.getElementById('panelsNeeded').textContent = panelsNeeded;
            document.getElementById('savings').textContent = '$' + annualSavings.toFixed(0);
            document.getElementById('result').classList.add('show');
        });

        document.getElementById('bookingForm').addEventListener('submit', function(e) {
            e.preventDefault();
            showModal('Appointment Confirmed', 'Our team will contact you within 24 hours to confirm your appointment details.');
            this.reset();
        });

        function addToCart(productName, price) {
            showModal('Added to Cart', `${productName} ($${price}) has been added to your cart successfully.`);
        }

        function showModal(title, message) {
            document.getElementById('modalTitle').textContent = title;
            document.getElementById('modalMessage').textContent = message;
            document.getElementById('modal').classList.add('show');
        }

        function closeModal() {
            document.getElementById('modal').classList.remove('show');
        }

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });