export class InMemorySearchEngine {
    constructor() {
        this.namespaces = {}; // Store documents by namespace
    }

    // Method to add a document to a specific namespace
    addDocument(namespace, document) {
        if (!this.namespaces[namespace]) {
            this.namespaces[namespace] = [];
        }
        this.namespaces[namespace].push(document);
    }

    // Method to search for documents in a namespace with optional sorting
    search(namespace, query, orderBy = null, order = 'asc') {
        if (!this.namespaces[namespace]) {
            console.log(`Namespace ${namespace} does not exist.`);
            return [];
        }

        // Perform search by filtering documents that contain the query term
        const results = this.namespaces[namespace].filter(doc => {
            return Object.values(doc).some(value => 
                String(value).toLowerCase().includes(query.toLowerCase())
            );
        });

        // Sort results by the orderBy parameter if provided
        if (orderBy) {
            results.sort((a, b) => {
                if (a[orderBy] < b[orderBy]) return order === 'asc' ? -1 : 1;
                if (a[orderBy] > b[orderBy]) return order === 'asc' ? 1 : -1;
                return 0;
            });
        }

        return results;
    }
}